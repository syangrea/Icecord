import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createChannel } from '../../../actions/channel_actions';
import { closeModal } from '../../../actions/modal_action';

class CreateChannel extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: ""
        }
        this.handleCreate = this.handleCreate.bind(this);
    }
    
    handleCreate(e){
        this.props.createChannel({name: this.state.name, creatorId: this.props.currentUserId, serverId: this.props.serverId})
            .then(() => this.props.closeModal())
    }

    render(){
        return(
            <div id="create-channel" className="add-channel-modals">
                <button className="modal-exit-button" onClick={() => this.props.closeModal()}>
                    <img src="https://img.icons8.com/officel/16/000000/multiply.png" />
                </button>
                <div id="create-channel-header" className="add-channel-modals-header">
                    <h2>Create Text Channel</h2>
                    <span>in Text Channels</span>
                </div>
                <div id="create-channel-body" className="add-channel-modals-body">

                    <label htmlFor="channel-name">CHANNEL NAME</label>
                    <input type="text" id="channel-name" 
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}
                    />
                    <span className="small-span">By creating a channel, you aren't 
                        agreeing to anything.    
                    </span>
                </div>
                
                <div id="create-channel-footer" className="add-channel-modals-footer">
                    <div>
                        <button onClick={() => this.props.closeModal()}>Cancel</button>
                    </div>
                    <button id="create-channel-button" onClick={this.handleCreate} disabled={this.state.name.length === 0}>Create</button>
                </div>
            </div>
        )
    }


}

const mSTP = (state, ownProps) => {
    
    return {
        currentUserId: state.session.id,
        serverId: ownProps.location.pathname.split("/")[2]
    }
}

const mDTP = dispatch => {

    return {
        closeModal: () => {
            return dispatch(closeModal())
        },
        createChannel: channel => {
            return dispatch(createChannel(channel))
        }

    }

}

export default withRouter(connect(mSTP,mDTP)(CreateChannel))