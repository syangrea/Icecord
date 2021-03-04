import React from 'react';
import { Link } from 'react-router-dom';

export default class DMListItem extends React.Component{
    constructor(props){
        super(props);
    }

    clickDMLink(userId){
        return e => {
            this.props.setCurrentDMUserId(userId)
        }
    }

    render(){
        
        let otherUser = this.props.users[0].id === this.props.currentUser.id ?
                            this.props.users[1] : this.props.users[0];
        
        let photoComp = otherUser.photoUrl ? 
            <img className="profile-icon" src={otherUser.photoUrl} />
            :
            <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />                    
        return (
            <li className={ this.props.currentDMUser && otherUser.id === this.props.currentDMUser.id ?
                "dm-list-item current-dm" : "dm-list-item"}>
                <Link onClick={this.clickDMLink(otherUser.id)} to={`/server/home/${this.props.channel.id}`}>
                    {photoComp}
                    <div>{otherUser.username} </div>
                </Link>
            </li>
        )
    }
}

