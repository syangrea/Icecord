import React from 'react';


export default class ChannelListItem extends React.Component{

    render(){
        return(
            <div class="channel-list-item">
                <div>{this.props.channel.name}</div>
            </div>
        )
    }
}