import React from 'react'
import {Link} from 'react-router-dom';

export default class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => {
            return this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state).then(() => {
            this.setState({
                email: "",
                username: "",
                password: ""
            });
            this.props.history.push("/server")
            // should push to history the route for servers/channels
        })
    }

    render(){
        
        return (
            <div id="form signout-form">
                <h2>Create an account</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        EMAIL {this.props.errors.email ? `- ${this.props.errors.email}` : null}
                        <input type="email" value={this.state.email} onChange={this.update("email")}/>
                    </label>
                    <label>
                        USERNAME {this.props.errors.username ? `- ${this.props.errors.username}` : null}
                        <input type="text" value={this.state.username} onChange={this.update("username")}/>
                    </label>
                    <label>
                        PASSWORD {this.props.errors.password ? `- ${this.props.errors.password}` : null}
                        <input type="password" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    <button>Continue</button>
                </form>
                <Link to="/login">Already have an account?</Link>
            </div>
        )
    }

}