import React from 'react';

export default class ServerMemberListItem extends React.Component{


    render(){
        return(
            <div>
                <ContextMenuTrigger id={`server-member-context-menu-${this.props.user.id}`}>
                    <li className="server-member">
                
                        <div id="server-member-icon-container">
                            <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
                        </div>
                        <div>{this.props.user.username}</div>
                    </li>

                </ContextMenuTrigger>
                <ContextMenu id={`server-member-context-menu-${this.props.user.id}`}>
                        
                        <MenuItem className="message-user-menu-item" onClick={}>
                            <div>Message</div>
                        </MenuItem>
                    
                </ContextMenu>
            </div>
          
        )
    }


}