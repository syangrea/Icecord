import React from 'react';
import ChannelListContainer from '../channel/channel_list_container';
import ServerMemberListContainer from './server_member_list/server_member_list_container';

export default class Server extends React.Component{

    constructor(props){
        super(props);

        
    }

    componentDidMount(){
        debugger
        return this.props.fetchServer(this.props.match.params.serverId);
    }

    componentDidUpdate(oldProps){
        if(oldProps.match.params.serverId !== this.props.match.params.serverId){
            return this.props.fetchServer(this.props.match.params.serverId);
        }
    }

    render(){
        return (
            <div id="server">
               
                <ChannelListContainer />
                <ServerMemberListContainer />
            </div>
        )
    }

}
