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
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    update(field) {
        return e => {
            return this.setState({ [field]: e.target.value })
        }
    }

    componentDidMount(){
        
    }

    handleSubmit(e) {
        e.preventDefault();
        
        this.props.login(this.state)
        //auth route automatically redirects to server when logged in for now
        //here might want to push exact server info or such later to history
        
    }

    handleDemoLogin(e){
        this.props.login({email: "demo123@gmail.com", password: "password"})
    }

    componentWillUnmount(){
        this.props.clearSessionErrors();
    }

    render() {
        let error = null;
        let errorInputClass = "";
        let errorLabelClass = "";

        if (typeof this.props.error !== "undefined"){
            error = `- ${this.props.error}`;
            errorInputClass = "error-input";
            errorLabelClass = "error-label"
        }

        

       
        return (
            <div className="session-page" id="login" >
                <img id="black-blob-img" src="https://discord.com/assets/c5c565a8b7cb84db7409e4052ead36fe.png" alt="" />
                <Link to="/"><img className="discord-logo" src={window.discordLogo} alt="" /></Link>
                <div id="login-form" className="session-form-container">
                    <form onSubmit={this.handleSubmit} className="session-form">
                        <h2>Welcome back!</h2>
                        <h5>We're so excited to see you again!</h5>
                        <label htmlFor="login-email" className={errorLabelClass}>EMAIL <span>{error}</span></label>
                        <input type="email" className={errorInputClass} id="email" value={this.state.email} onChange={this.update("email")} />
                        
                        <label htmlFor="login-password" className={errorLabelClass}>PASSWORD <span>{error}</span></label>
                        <input type="password" className={errorInputClass} id="login-password" value={this.state.password} onChange={this.update("password")} />
                        <button>Login</button>
                        <h5 id="login-signup-link">Need an account? <Link to="/signup">Register</Link></h5>
                    </form>
                    <div id="demo-button">

                        <button onClick={this.handleDemoLogin}>Demo</button>
                        <h2>Log in as demo</h2>
                        <h5>Don't want to sign up or login? Press this to demo app!</h5>
                    </div>
                </div>
            </div>
        )
    }

}