import React from 'react';
import ServerListContainer from './server_list_container';
import {Route, Link} from 'react-router-dom';
import ServerContainer from './server_container'

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
                <button onClick={this.handleLogout}>Logout</button>
                <ServerListContainer/>
                <Route path="/server/:serverId" component={ServerContainer}/>
                <Link to="/server/create">Create Server</Link>
                <Route path="/server/create" render={props => {
                    return <CreateServerForm {...props} 
                        createServer={this.props.createServer}
                    />
                }}/>

            </div>
        )
    }

}