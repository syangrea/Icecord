import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteChannel } from '../../../actions/channel_actions';
import { closeModal } from '../../../actions/modal_action';


class DeleteChannel extends React.Component{
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e){
        this.props.deleteChannel(this.props.channel.id)
            .then(() => this.props.closeModal())

    }

    render(){
        return (
            <div id="delete-channel">
                <div className="modal-header" id="delete-modal-header">

                    <h5>DELETE CHANNEL</h5>
                </div>
                
                <div className="modal-body" id="delete-modal-body">
                    <span id="channel-delete-span">
                        Are you sure you want to delete {this.props.channel.name} ?
                        This cannot be undone
                    </span>
                </div>



                <div className="modal-footer" id="delete-modal-footer">

                    <button className="modal-cancel" onClick={() => this.props.closeModal()}>
                        <div>
                            Cancel
                        </div>
                    </button>
                    
                    <button className="modal-leave-delete-button" onClick={this.handleDelete}>
                        <div>
                            Delete Channel
                        </div>
                    </button>
                    
                </div>


            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    return {
        
        channel: state.entities.channels[state.ui.filters.channelClicked]
        
    }
}

const mDTP = dispatch => {
    return {
        deleteChannel: channelId => {
            return dispatch(deleteChannel(channelId));
        },
        closeModal: () => {
            return dispatch(closeModal())
        }
    }
}


export default withRouter(connect(mSTP, mDTP)(DeleteChannel))