import React from 'react';

export default class Server extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        return this.props.logout().then(() =>{
            this.props.history.push("/")
        });
    }



    render(){
        return (
            <button onClick={this.handleLogout}>Logout</button>
        )
    }

}