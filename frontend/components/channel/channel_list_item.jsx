import React from 'react';
import { Link } from 'react-router-dom';


export default class ChannelListItem extends React.Component{

    render(){
        return(
            <div className="channel-list-item">
                <div>
                    <Link to={`/server/${this.props.server.id}/channel/${this.props.channel.id}`}>
                        {this.props.channel.name}
                    </Link>
                </div>
            </div>
        )
    }
}