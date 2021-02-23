import React from 'react';
import ChannelListContainer from '../channel/channel_list_container';
import ServerMemberListContainer from './server_member_list/server_member_list_container';
import { ContextMenuTrigger, MenuItem, ContextMenu } from 'react-contextmenu';
import MessagesBoxContainer from '../channel/chatbox/messages_box_container';
import { Route } from 'react-router-dom';

export default class Server extends React.Component{

    constructor(props){
        super(props);
        this.handleContextClick = this.handleContextClick.bind(this)
        
    }

    componentDidMount(){
        
        return this.props.fetchServer(this.props.match.params.serverId)
            .then(() => this.props.history.push(`/server/${this.props.match.params.serverId}/channel/${this.props.channels[0].id}`));
    }

    componentDidUpdate(oldProps){
        if(oldProps.match.params.serverId !== this.props.match.params.serverId){
            return this.props.fetchServer(this.props.match.params.serverId);
        }
    }

    handleContextClick(modalToOpen) {
        
        return e => {
            
            this.props.serverClick(this.props.server.id);
            switch (modalToOpen) {
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


    render(){
        
        return (
            <div id="server">
                <div id="server-header">
                    <ContextMenuTrigger id="server-name-server-nav" >
                        <div id="server-name-server-page">
                            <h3>{this.props.server.name}</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" /></svg>
                        </div>
                    </ContextMenuTrigger>

                    <ContextMenu id="server-name-server-nav">
                        <MenuItem onClick={this.handleContextClick("invitePeople")}>
                            <div className="invite-people-menu-item">
                                Invite People
                            </div>

                        </MenuItem>
                        {this.props.isOwner ? <MenuItem onClick={this.handleContextClick("server")}>
                            <div>Server Settings</div>
                        </MenuItem> : null}
                        {!this.props.isOwner ? <MenuItem onClick={this.handleContextClick("leaveServer")}>
                            <div className="leave-server-menu-item">Leave Server</div>
                        </MenuItem> : null}
                    </ContextMenu>
                    
                    <div id="server-channel-name-server-page">
                        <i className="fas fa-hashtag hashtag-symbol"></i>                          
                        <span>general</span>
                    </div>
                    
                </div>
                <div id="server-body">

                    <ChannelListContainer server={this.props.server}/>
                    <Route path="/server/:serverId/channel/:channelId" component={MessagesBoxContainer} />
                  
                    <ServerMemberListContainer />
                </div>
            </div>
        )
    }

}
