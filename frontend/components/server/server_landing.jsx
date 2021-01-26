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
                    <Link><img src="https://img.icons8.com/android/24/000000/plus.png"/></Link>
                    <Link><img src="https://img.icons8.com/office/16/000000/compass--v1.png" /></Link>
                </div>
                
                <Route path="/server/:serverId" component={ServerContainer}/>
                <Link to="/server/create">Create Server</Link>
                <Route path="/server/create" render={props => {
                    return <CreateServerForm {...props} 
                    createServer={this.props.createServer}
                    />
                }}/>

                <button onClick={this.handleLogout}>Logout</button>
            </div>
        )
    }

}