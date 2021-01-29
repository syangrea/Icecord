import React from 'react';
import {timeDisplay} from '../../../utils/date_util';

export default class Message extends React.Component {
    
    render() {
        let component;
        if(this.props.isStartingMessage){
            component = (
                <div className="starting-message">
                    <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
                    
                    <div className="starting-message-container">
                        <div className="starting-message-header">
                            <h3>{this.props.user.username}</h3>
                            <span>{timeDisplay(this.props.message.createdAt)}</span>
                        </div>

                        
                        <div className="message-text">{this.props.message.body}</div>
                        
                    </div>
                </div>
            )
        }else{
            component = (
                <div className="message">
                    
                    <div className="message-text">{this.props.message.body}</div>
                    
                </div>
            )
        }

        return component;
    }
}