import React from 'react'
import { withRouter, Link, Route } from 'react-router-dom';

import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';

export default class ServerListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            hover: false
        }
        // this.handleInvite = this.handleInvite.bind(this);
        this.handleContextClick = this.handleContextClick.bind(this)
        // 
    }
 
    

    handleContextClick(modalToOpen){
        // 
        return e => {
            // 
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
    //     
    //     this.props.openModal("invitePeople");
    // }

    handleNavClick(id) {
        return e => {
            return this.props.landingNavClick(id);
        }
    }

    render(){
        // 
       let imageComp;
       if(this.props.server.photoUrl){
            imageComp = <div>
                <img src={this.props.server.photoUrl} alt=""/>
            </div>
       }else{
           imageComp = <div>
                {this.props.server.name.slice(0,2)}
            </div>
       }
       let leftServerBarClass = "left-server-bar";
       if(this.props.isNavClicked){
         leftServerBarClass = leftServerBarClass + " server-clicked";
       }else if(this.state.hover){
           
        leftServerBarClass = leftServerBarClass + " server-hovered";
       }
       let serverHoverDescription = (
           <div className={this.state.hover ? "server-hover-description hovered" : "server-hover-description" }>
               <div>{this.props.server.name}</div>
            </div>
       )
       let leftServerBar = (
           <div className={leftServerBarClass}></div>
       )
        return (
            <div className="server-list-item-container" 
                onMouseEnter={e => this.setState({hover: true})}
                onMouseLeave={e => this.setState({hover: false})}>
                {serverHoverDescription}
                {leftServerBar}
                <ContextMenuTrigger id={`server-nav-context-menu-${this.props.server.id}`}>
                    <li onClick={this.handleNavClick(this.props.server.id)} 
                        className={`server-list-item-li ${this.props.isNavClicked ? "nav-clicked" : null}`}>
                        <div className="server-list-item">
                            <Link to={`/server/${this.props.server.id}/channel/${this.props.defaultChannel.id}`}>
                                {imageComp}
                            </Link>
                            
                        </div>

                    </li>
                    
                </ContextMenuTrigger>

                <ContextMenu id={`server-nav-context-menu-${this.props.server.id}`}>
                    <MenuItem onClick={this.handleContextClick("invitePeople")}>
                        <div className="invite-people-menu-item">
                            Invite People
                        </div>
                        
                    </MenuItem>
                    {this.props.isOwner ? <MenuItem onClick={this.handleContextClick("server")}>
                        <div>Server Settings</div>
                    </MenuItem> : null}
                    {!this.props.isOwner ? <MenuItem className="leave-server-menu-item" onClick={this.handleContextClick("leaveServer")}>
                        <div >Leave Server</div>
                    </MenuItem> : null}
                </ContextMenu>
            </div>

        )
    }

}

