import React from 'react';
import ServerMemberListItem from './server_member_list_item';

export default class ServerMemberList extends React.Component{

    render(){
        return(
            <div id="server-member-list">
                <ul>
                    {
                        this.props.users.map((user,idx) =>{
                            return <ServerMemberListItem user={user} key={idx}/>
                        })
                    }
                </ul>
            </div>
        )
    }

}
