import React from 'react';
import ServerMemberListItem from './server_member_list_item';

export default class ServerMemberList extends React.Component{

    render(){
        debugger 
        return(
            <div id="server-member-list">
                Server member list  
                <ul>
                    {
                        this.props.users.map((user,idx) =>{
                            debugger
                            return <ServerMemberListItem user={user} key={idx}/>
                        })
                    }
                </ul>
            </div>
        )
    }

}
