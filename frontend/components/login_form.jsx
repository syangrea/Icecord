import React from 'react'
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            return this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        this.props.login(this.state)
        //auth route automatically redirects to server when logged in for now
        //here might want to push exact server info or such later to history
        
        

    }

    render() {
        let error = null;
   
        if (typeof this.props.error !== "undefined"){
            error = `- ${this.props.error}`
        }
       
        return (
            <div id="login">
                <img className="discord-logo" src="/assets/discord_logo.png" alt="" />
                <div id="login-form" className="form">
                    <form onSubmit={this.handleSubmit}>
                        <h2>Welcome back!</h2>
                        <h5>We're so excited to see you again!</h5>
                        <label htmlFor="login-email">EMAIL {error}</label>
                        <input type="email" id="email" value={this.state.email} onChange={this.update("email")} />
                        
                        <label htmlFor="login-password">PASSWORD {error}</label>
                        <input type="password" id="login-password" value={this.state.password} onChange={this.update("password")} />
                        <button>Login</button>
                        <h5 id="login-signup-link">Need an account? <Link to="/signup">Register</Link></h5>
                    </form>
                    <div id="demo-button">

                        <button>Demo</button>
                        <h2>Log in as demo</h2>
                        <h5>Don't want to sign up or login? Press this to demo app!</h5>
                    </div>
                </div>
            </div>
        )
    }

}