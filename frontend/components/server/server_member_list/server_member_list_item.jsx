import React from 'react';

export default class ServerMemberListItem extends React.Component{


    render(){
        return(
            <li className="server-member">
                
                <div id="server-member-icon-container">
                    <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
                </div>
                <div>{this.props.user.username}</div>
            </li>
        )
    }


}