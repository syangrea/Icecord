import React from 'react';
import { withRouter } from 'react-router';
import ChannelListItemContainer from './channel_list_item_container';

class ChannelList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTextChannels: true
        }
        this.toggleShowTextChannels = this.toggleShowTextChannels.bind(this);

    }

    toggleShowTextChannels(e){
        this.setState({showTextChannels: !this.state.showTextChannels})
    }

    componentDidMount(){
        
        if(this.props.location.pathname.split("/").length === 5){
            
            this.props.setCurrentChannel(parseInt(this.props.location.pathname.split("/")[4]))
        }
    }

    componentDidUpdate(oldProps){
        
        if(this.props.location.pathname.split("/").length === 5 
            && oldProps.location.pathname.split("/").length === 5){
                if(this.props.location.pathname.split("/")[4] 
                    !== oldProps.location.pathname.split("/")[4]){

                        this.props.setCurrentChannel(parseInt(this.props.location.pathname.split("/")[4]))
                    }
            }
    }

    render(){

        let textChannelList = null;
        if(this.state.showTextChannels){
            textChannelList = <ul>
                    {
                        this.props.channels.map((channel,idx) => {
                            return <ChannelListItemContainer server={this.props.server} channel={channel} key={idx}/>
                        })
                    }
                </ul>
        }

        return(
            <div id="channel-list">
                <div className="channel-type-container" >
                    <div className="text-channel-header" onClick={this.toggleShowTextChannels}>

                        <svg className={this.state.showTextChannels ? "opened-channels" : null} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                        <h5>Text Channels</h5>
                    </div>
                    <div className="add-channel-modal-button" onClick={e => this.props.openModal("createChannel")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                    </div>
                </div>
                
                {textChannelList}
            </div>
        )
    }
}

export default withRouter(ChannelList)