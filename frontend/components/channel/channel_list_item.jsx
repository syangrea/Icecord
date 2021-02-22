import React from 'react';
import { Link } from 'react-router-dom';


export default class ChannelListItem extends React.Component{

    constructor(props){
        super(props);
    }

    handleNavClick(id){
        return e => {

        }
    }

    handleContextClick(modalName){
        return e => {
            this.props.channelClick(this.props.channel.id).then(() => {
                switch(modlaName){
                case "channel":
                    this.props.openSettingsModal(modelName);
                    break;
                case "deleteChannel":
                    this.props.openModal(modalName);
                    break;
                }
            })

        }
    }

    render(){
        return(
            <div>
                
                <ContextMenuTrigger id={`channel-nav-context-menu-${this.props.channel.id}`}>
                    <li onClick={this.handleNavClick(this.props.channel.id)} 
                        className={`channel-list-item-li ${this.props.isNavClicked ? "nav-clicked" : null}`}>
                        <div className="channel-list-item">
                            <Link to={`/server/${this.props.server.id}/channel/${this.props.channel.id}`}>
                                {this.props.channel.name}
                            </Link>

                        </div>
                    </li>
                
                </ContextMenuTrigger>
                
                {this.props.isOwner ? 
                <ContextMenu id={`channel-nav-context-menu-${this.props.channel.id}`}>
                    <MenuItem onClick={this.handleContextClick("channel")}>
                        <div>Edit Channel</div>
                    </MenuItem>
                    <MenuItem className="delete-channel-menu-item" onClick={this.handleContextClick("deleteChannel")}>
                        <div >Delete Channel</div>
                    </MenuItem>
                </ContextMenu> : null
                }
            </div>
        )
    }
}