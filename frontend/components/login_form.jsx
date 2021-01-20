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
        this.props.login(this.state).then(() => {
            this.setState({
                email: "",
                password: ""
            });
            this.props.history.push("/server")
            // should push to history the route for servers/channels
        })
        
        

    }

    render() {
        let error = null;
   
        if (typeof this.props.error !== "undefined"){
            error = `- ${this.props.error}`
        }
       
        return (
            <div id="form login-form">
                <h2>Welcome back!</h2>
                <h3>We're so excited to see you again!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        EMAIL {error}
                        <input type="email" value={this.state.email} onChange={this.update("email")} />
                    </label>
                    
                    <label>
                        PASSWORD {error}
                        <input type="password" value={this.state.password} onChange={this.update("password")} />
                    </label>
                    <button>Login</button>
                </form>
                <h5>Need an account? <Link to="/signup">Register</Link></h5>
                <button>Demo</button>
                <h2>Log in as demo</h2>
                <h5>Don't want to sign up or login? Press this to demo app!</h5>
            </div>
        )
    }

}