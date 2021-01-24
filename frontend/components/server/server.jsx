import React from 'react';
import ChannelListContainer from '../channel/channel_list_container';
import ServerMemberListContainer from './server_member_list/server_member_list_container';

export default class Server extends React.Component{

    constructor(props){
        super(props);

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
