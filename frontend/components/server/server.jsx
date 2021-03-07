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
        this.props.fetchServer(this.props.match.params.serverId)
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

   componentDidUpdate(oldProps){
       debugger
       if(!this.props.server){
        debugger
        this.props.history.push('/server/home')
        this.props.landingNavClick(-1);
       }
   }

    render(){
        if(!this.props.server) return null;
        let channelName = "General";
        let pathParams = this.props.location.pathname.split("/")
        if(pathParams.length === 5){
            channelName = this.props.allChannels[pathParams[4]].name
        }
        
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
                        <svg className="hashtag-symbol"  viewBox="0 -21 469.33333 469" width="20pt" xmlns="http://www.w3.org/2000/svg"><path d="m282.667969 426.855469c-1.386719 0-2.796875-.171875-4.183594-.554688-8.53125-2.285156-13.566406-11.09375-11.261719-19.605469l106.664063-394.667968c2.304687-8.554688 11.09375-13.675782 19.628906-11.265625 8.53125 2.285156 13.566406 11.09375 11.261719 19.605469l-106.664063 394.667968c-1.921875 7.125-8.386719 11.820313-15.445312 11.820313zm0 0"/><path d="m80 426.855469c-1.386719 0-2.792969-.171875-4.179688-.554688-8.535156-2.285156-13.570312-11.09375-11.265624-19.605469l106.667968-394.667968c2.300782-8.554688 11.113282-13.675782 19.625-11.265625 8.535156 2.285156 13.566406 11.09375 11.265625 19.605469l-106.667969 394.667968c-1.921874 7.125-8.382812 11.820313-15.445312 11.820313zm0 0"/><path d="m410.667969 320.1875h-394.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m453.332031 138.855469h-394.664062c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h394.664062c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/></svg>
                                             
                        <span>{channelName}</span>
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
