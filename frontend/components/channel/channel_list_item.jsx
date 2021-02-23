import React from 'react';
import { Link } from 'react-router-dom';
import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';



export default class ChannelListItem extends React.Component{

    constructor(props){
        super(props);
    }

    handleNavClick(id){
        return e => {
            this.props.setCurrentChannel(id);
        }
    }

    handleContextClick(modalName){
        return e => {
            this.props.channelClick(this.props.channel.id)
            switch(modalName){
                case "channel":
                    this.props.openSettingsModal(modalName);
                    break;
                case "deleteChannel":
                    this.props.openModal(modalName);
                    break;
                
            }

        }
    }

    render(){

        let component;
        if(this.props.isOwner){
            component =  
                <div>
                    <ContextMenuTrigger id={`channel-nav-context-menu-${this.props.channel.id}`}>
                        <li onClick={this.handleNavClick(this.props.channel.id)} 
                            className={`channel-list-item-li ${this.props.isNavClicked ? "nav-clicked" : null}`}>
                                                                                     
                            <Link to={`/server/${this.props.server.id}/channel/${this.props.channel.id}`}
                                onClick={this.handleNavClick(this.props.channel.id)} 
                                className={this.props.isCurrentChannel ? "channel-list-item current-channel" : "channel-list-item"}>
                                    <i className="fas fa-hashtag hashtag-symbol"></i>  
                                    <div>{this.props.channel.name}</div>
                            </Link>

                        </li>

                    </ContextMenuTrigger>

                    <ContextMenu id={`channel-nav-context-menu-${this.props.channel.id}`}>
                    
                        
                        <MenuItem onClick={this.handleContextClick("channel")}>
                            <div>Edit Channel</div>
                        </MenuItem>
                    
                     
                        <MenuItem className="delete-channel-menu-item" onClick={this.handleContextClick("deleteChannel")}>
                            <div >Delete Channel</div>
                        </MenuItem>
                    
                    </ContextMenu>
                </div>
    
        }else{
            component = 
            <div>
                <li onClick={this.handleNavClick(this.props.channel.id)} 
                    className={`channel-list-item-li ${this.props.isNavClicked ? "nav-clicked" : null}`}>
                    <Link to={`/server/${this.props.server.id}/channel/${this.props.channel.id}`}
                                onClick={this.handleNavClick(this.props.channel.id)} 
                                className={this.props.isCurrentChannel ? "channel-list-item current-channel" : "channel-list-item"}>
                        <i className="fas fa-hashtag hashtag-symbol"></i>  
                        <div>{this.props.channel.name}</div>
                    </Link>
                </li>
            </div>
        }
        return component;
    }
}