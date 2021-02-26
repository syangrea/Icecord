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
        
        return (
            <li className={ this.props.currentDMUser && otherUser.id === this.props.currentDMUser.id ?
                "dm-list-item current-dm" : "dm-list-item"}>
                <Link onClick={this.clickDMLink(otherUser.id)} to={`/server/home/${this.props.channel.id}`}>

                    <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
                    <div>{otherUser.username} </div>
                </Link>
            </li>
        )
    }
}

