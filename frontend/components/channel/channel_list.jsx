import React from 'react';
import ChannelListItemContainer from './channel_list_item_container';

export default class ChannelList extends React.Component{


    render(){
        return(
            <div id="channel-list">
                <h5>Channels</h5>
                <ul>
                    {
                        this.props.channels.map((channel,idx) => {
                            return <ChannelListItemContainer channel={channel} key={idx}/>
                        })
                    }
                </ul>
            </div>
        )
    }
}