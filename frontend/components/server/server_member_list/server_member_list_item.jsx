import React from 'react';

export default class ServerMemberListItem extends React.Component{


    render(){
        return(
            <li>
                {this.props.user.username}
            </li>
        )
    }


}