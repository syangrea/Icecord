import React from 'react'
import { withRouter, Link, Route } from 'react-router-dom';

import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';

export default class ServerListItem extends React.Component{

    constructor(props){
        super(props);
        // this.handleInvite = this.handleInvite.bind(this);
        this.handleContextClick = this.handleContextClick.bind(this)
        debugger
    }
 
    

    handleContextClick(modalToOpen){
        // debugger
        return e => {
            // debugger
            this.props.serverClick(this.props.server.id);
            switch(modalToOpen){
                case 'server':
                    this.props.openSettingsModal("server");
                    break;
                case 'invitePeople':
                    this.props.openModal("invitePeople");
                    break;
                case 'leaveServer':
                    this.props.openModal("leaveServer");
                    break;
                default:
                    return null
                
            }
        }
    }

    // handleInvite(e){
    //     debugger
    //     this.props.openModal("invitePeople");
    // }


    render(){
        debugger
        return (
            <li>
                <ContextMenuTrigger id={`server-nav-context-menu-${this.props.server.id}`}>
    
                    <div className="server-list-item">
                        <Link to={`/server/${this.props.server.id}`}>{this.props.server.name.slice(0,2)}</Link>
                        
                    </div>
                    
                </ContextMenuTrigger>

                <ContextMenu id={`server-nav-context-menu-${this.props.server.id}`}>
                    <MenuItem onClick={this.handleContextClick("invitePeople")}>
                        Invite People
                    </MenuItem>
                    {this.props.isOwner ? <MenuItem onClick={this.handleContextClick("server")}>
                        Server Settings
                    </MenuItem> : null}
                    {!this.props.isOwner ? <MenuItem onClick={this.handleContextClick("leaveServer")}>
                        Leave Server
                    </MenuItem> : null}
                </ContextMenu>
            </li>

        )
    }

}

