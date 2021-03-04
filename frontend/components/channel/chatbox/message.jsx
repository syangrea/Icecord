import React from 'react';
import {timeDisplay} from '../../../utils/date_util';
import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';

export default class Message extends React.Component {

    constructor(props){
        super(props);
        this.clickMessage = this.clickMessage.bind(this);
    }
    
    clickMessage(e){
        
        if(this.props.privateChannel){
            this.props.history.push(`/server/home/${this.props.privateChannel.id}`)
        }else{

            const formData = new FormData();
            formData.append('server[name]', 'privateServer');
            formData.append('server[direct_message]', true);
            formData.append('server[ownerId]', this.props.currentUserId);
            this.props.createPrivateServer(formData)
                .then(res => {
                    
                    this.props.joinServer(res.payload.server.link, this.props.user.id)
                        .then(res2 => {
                            
                            this.props.history.push(`/server/home/${Object.values(res.payload.channels)[0].id}`)
                        })
                })
        }
    }

    render() {
        let component;
        if(this.props.isStartingMessage){
            let photoComp = this.props.user.photoUrl ? 
                <img className="profile-icon" src={this.props.user.photoUrl} />
                :
                <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
            component = (
                <div className="starting-message">
                    <ContextMenuTrigger id={`user-image-message-context-menu-${this.props.user.id}`}>
                        {photoComp}
                    </ContextMenuTrigger>
                    <ContextMenu id={`user-image-message-context-menu-${this.props.user.id}`}>
                        {(this.props.currentUserId !== this.props.user.id) ? 
                        <MenuItem className="message-user-menu-item" onClick={this.clickMessage}>
                            <div>Message</div>
                        </MenuItem> : 
                        <MenuItem className="current-user-menu-item" onClick={e => this.props.openUserSettings()}>
                            <div>Settings</div>
                        </MenuItem>
                        }
                     </ContextMenu>
                    
                    
                    <div className="starting-message-container">
                        <div className="starting-message-header">
                            <ContextMenuTrigger id={`user-message-context-menu-${this.props.user.id}`}>
                                <h3>{this.props.user.username}</h3>
                            </ContextMenuTrigger>
                            <ContextMenu id={`user-message-context-menu-${this.props.user.id}`}>
                                    {(this.props.currentUserId !== this.props.user.id) ? 
                                    <MenuItem className="message-user-menu-item" onClick={this.clickMessage}>
                                        <div>Message</div>
                                    </MenuItem> : 
                                    <MenuItem className="current-user-menu-item" onClick={e => this.props.openUserSettings()}>
                                        <div>Settings</div>
                                    </MenuItem>
                                    }
                            </ContextMenu>
                            <span>{timeDisplay(this.props.message.createdAt)}</span>
                        </div>

                        
                        <div className="message-text">{this.props.message.body}</div>
                        
                    </div>
                </div>
            )
        }else{
            component = (
                <div className="message">
                    
                    <div className="message-text">{this.props.message.body}</div>
                    
                </div>
            )
        }

        return component;
    }
}