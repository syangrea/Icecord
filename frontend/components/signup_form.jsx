import React from 'react'
import {Link} from 'react-router-dom';
import {monthArr, dayArr, yearArr} from '../utils/date_util';
export default class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
            password: "",
            dobMonth: "",
            dobDay: "",
            dobYear: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectOption = this.handleSelectOption.bind(this);
    }

    update(field){
        return e => {
            return this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.signup(this.state)
        //auth route automatically redirects to server when logged in for now
        //here might want to push exact server info or such later to history
     
    }

    handleSelectOption(field){
        // debugger
        return (e) => {
            debugger
            return this.setState({[field]: e.target.innerText});
        }
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }
    

    render(){
       
        return (
            <div className="session-page" id="signup" >
                <img className="discord-logo" src={window.discordLogo} alt="" />
                <div id="signout-form" className="session-form-container">
                    <form onSubmit={this.handleSubmit} className="session-form">
                        <h2>Create an account</h2>
                        <label htmlFor="signup-email" className={this.props.errors.email ? "error-label" : ""}>
                            EMAIL {this.props.errors.email ? `- ${this.props.errors.email}` : null}
                        </label>
                        <input type="email" className={this.props.errors.email ? "error-input" : ""} id="signup-email" value={this.state.email} onChange={this.update("email")}/>
                        <label htmlFor="signup-username" className={this.props.errors.username ? "error-label" : ""}>
                            USERNAME {this.props.errors.username ? `- ${this.props.errors.username}` : null}
                        </label>
                        <input type="text" className={this.props.errors.username ? "error-input" : ""} id="signup-username" value={this.state.username} onChange={this.update("username")}/>
                        <label id="signup-password" className={this.props.errors.password ? "error-label" : ""}>
                            PASSWORD {this.props.errors.password ? `- ${this.props.errors.password}` : null}
                        </label>
                        <input type="password" className={this.props.errors.password ? "error-input" : ""} id="signup-password" value={this.state.password} onChange={this.update("password")}/>
                        <label>DATE OF BIRTH</label>
                        <div id="signup-dob">
                            
                            <div id="dob-month" className="dob-select">
                                <div className="dob-dropdown-label">
                                    <input id="month-input" type="text" 
                                        value={this.state.dobMonth.length === 0 ? "Month" : this.state.dobMonth} 
                                        onChange={this.update('dobMonth')} 
                                        
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                                    <div id="dob-month-options" className="dob-dropdown">
                                        
                                        <ul>
                                            {monthArr.map((month,idx) => {
                                                // debugger
                                                return <li onMouseDown={this.handleSelectOption('dobMonth')} key={idx} value="">{month}</li>
                                            })}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div id="dob-day" className="dob-select">
                                <div className="dob-dropdown-label" >
                                    <input type="text" onChange={this.update('dobDay')} value={this.state.dobDay.length === 0 ? "Day" : this.state.dobDay} />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                                    
                                    <div  id="dob-day-options" className="dob-dropdown">

                                        <ul >
                                            {dayArr.map((day, idx) => {
                                                return <li onMouseDown={this.handleSelectOption("dobDay")} key={idx} value="">{day}</li>
                                            },this)}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                            <div id="dob-year" className="dob-select">
                                <div className="dob-dropdown-label">
                                    <input type="text" value={this.state.dobYear.length === 0 ? "Year" : this.state.dobYear} onChange={this.update('dobYear')}/>
                                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                                    <div id="dob-year-options" className="dob-dropdown">

                                        <ul>
                                            {yearArr.map((year, idx) => {
                                                return <li onMouseDown={this.handleSelectOption("dobYear")} key={idx}  value="">{year}</li>
                                            },this)}
                                        </ul>

                                    </div>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                        <button>Continue</button>
                        <Link to="/login">Already have an account?</Link>
                    </form>
                    <p>By registering you aren't agreeing to anything. Don't give a username or password you actually use.</p>
                </div>
            </div>
        )
    }

}