import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_action';
import { closeSettingsModal } from '../../../actions/settings_modal_action';
import ChannelOverviewSettings from './channel_overview_settings';
 
class ChannelSettingsModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            setting: 'Overview'
        }

    }

    handleSettingClick(e){
        this.setState({setting: e.target.innerText})
    }

    render(){
        let component;
        switch(this.state.setting){
            case 'Overview':
                component = <ChannelOverviewSettings channel={this.props.channel}/>;
                break;
            default:
                return null;
        }
        return(
            <div id="channel-settings-modal" className="specific-settings-modal">
                <div className="settings-sidebar">

                    <div className="settings-nav">
                        <h5>{this.props.channel.name}</h5>
                        <ul>
                            <li onClick={e => this.handleSettingClick}>Overview</li>
                            {this.props.deleteChannelModal}
                        </ul>
                    </div>
                </div>
                <div className="settings-main">

                    <div className="settings-body-container">
                        {component}
                        
                    </div>
                    <div className="settings-exit">
                        <button onClick={e => this.props.closeSettingsModal()}>
                            <img src="https://img.icons8.com/plasticine/100/000000/exit.png" />
                        </button>
                        
                        
                    </div>
                </div>
            </div>
            

        )
    }


}

const mSTP = (state,ownProps) => {
    return {
        channel: state.entities.channels[state.ui.filters.channelClicked],
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        deleteChannelModal: (
            <button onClick={e => dispatch(openModal('deleteChannel'))}>
                Delete Channel
            </button>
        ),
        closeSettingsModal: () => {
            return dispatch(closeSettingsModal())
        }
    }
}

export default connect(mSTP, mDTP)(ChannelSettingsModal)