import React from 'react';
import { connect } from 'react-redux';
import { updateChannel } from '../../../actions/channel_actions';
import { closeSettingsModal } from '../../../actions/settings_modal_action';

class ChannelOverviewSettings extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: this.props.channel.name
        }
        this.handleReset = this.handleReset.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleReset(e){
        this.setState({name: this.props.channel.name})
    }

    handleSave(e){
        let newChannel = Object.assign({}, this.props.channel, this.state);
        
        this.props.updateChannel(newChannel)
            
    }

    render(){
        let saveChanges = null;
        if(this.props.channel.name !== this.state.name && this.state.name.length !== 0){
            saveChanges = (
            <div id="channel-save-changes">
                <span>Careful--you have unsaved changes!</span>
                <div>
                    <button id="channel-change-reset" onClick={this.handleReset}>Reset</button>
                    <button id="channel-change-save" onClick={this.handleSave}>Save Changes</button>
                </div>
            </div>
            )
        }
        return(
            <div className="settings-body">
                <h5>OVERVIEW</h5>
                <div id="channel-overview-1">
                    <div id="channel-overview-1-body">

                        <label htmlFor="server-name">CHANNEL NAME</label>
                        <input type="text" value={this.state.name} 
                            onChange={e => this.setState({name: e.target.value})}
                        />
                    </div>
                </div>
                {saveChanges}
            </div>
        )
    }


}


const mSTP = (state,ownProps) => {
    return {

    }

}

const mDTP = dispatch => {
    return {
        closeSettingsModal: () => {
            return dispatch(closeSettingsModal())
        },
        updateChannel: channel => {
            return dispatch(updateChannel(channel))
        }
    }
}

export default connect(mSTP, mDTP)(ChannelOverviewSettings);