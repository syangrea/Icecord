import React from 'react';
import {ContextMenuTrigger, MenuItem, ContextMenu} from 'react-contextmenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createServer, joinServer } from '../../../actions/server_action';
import { openSettingsModal } from '../../../actions/settings_modal_action';
import { getPrivateChannel } from '../../../utils/private_message_util';

class ServerMemberListItem extends React.Component{

    constructor(props){
        super(props);
        this.clickMessage = this.clickMessage.bind(this);
    }

    clickMessage(e){
        if(this.props.privateChannel){
            this.props.history.push(`/server/home/${this.props.privateChannel.id}`)
        }else{
            this.props.createPrivateServer({name: 'privateServer', direct_message: true, ownerId: this.props.currentUserId})
                .then(res => {
                    
                    this.props.joinServer(res.payload.server.link, this.props.user.id)
                        .then(res2 => {
                            
                            this.props.history.push(`/server/home/${Object.values(res.payload.channels)[0].id}`)
                        })
                })
        }
    }
    

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
                        
                        {(this.props.currentUserId !== this.props.user.id) ? 
                        <MenuItem className="message-user-menu-item" onClick={this.clickMessage}>
                            <div>Message</div>
                        </MenuItem> : 
                        <MenuItem className="current-user-menu-item" onClick={e => this.props.openUserSettings()}>
                            <div>Settings</div>
                        </MenuItem>
                        }
                </ContextMenu>
            </div>
          
        )
    }


}

const mSTP = (state, ownProps) => {
    return {
        privateChannel: getPrivateChannel(state, ownProps.user),
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        createPrivateServer: server => {
            return dispatch(createServer(server))
        },
        joinServer: (link,id) => {
            return dispatch(joinServer(link,id))
        },
        openUserSettings: () => dispatch(openSettingsModal('user'))
        
    }
}

export default withRouter(connect(mSTP,mDTP)(ServerMemberListItem))