import React from 'react'
import { withRouter, Link, Route } from 'react-router-dom';
import ServerRightClickDropdownContainer from '../dropdown/server_right_click_dropdown_container';

class ServerListItem extends React.Component{

    constructor(props){
        super(props);
        
    }
 


    render(){
        
        return (
            <li>

                <div className="server-list-item">
                    <br/>
                    <Link to={`/server/${this.props.server.id}`}>{this.props.server.name.slice(0,2)}</Link>
                    <ServerRightClickDropdownContainer /> 
                    
                </div>
            </li>
        )
    }

}

export default withRouter(ServerListItem);