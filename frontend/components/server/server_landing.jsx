import React from 'react';
import {Route, Link} from 'react-router-dom';
import ServerContainer from './server_container';
import ServerListContainer from './server_list/server_list_container';

export default class ServerLanding extends React.Component{

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
            <div id="server-landing">
                <div id="server-nav-bar">
                    <Link>Me</Link>
                    <ServerListContainer />
                    {this.props.addServerModal}
                    <Link><img src="https://img.icons8.com/office/16/000000/compass--v1.png" /></Link>
                </div>
                
                <Route path="/server/:serverId" component={ServerContainer}/>
                
                
                
                <div id="name-settings">
                    {this.props.user.username}
                    {this.props.userSettingsModal}
                </div>
                
            </div>
        )
    }

}