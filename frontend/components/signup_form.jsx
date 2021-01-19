import React from 'react'

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
            // should push to history the route for servers/channels
        }).fail()


    }

    render(){
        
    }

}