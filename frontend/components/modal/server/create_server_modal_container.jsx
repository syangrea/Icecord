import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../../actions/modal_action';
import { createServer} from '../../../actions/server_action';
import CreateServerModal from './create_server_modal';


const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        addServerModal: (
            <button className="server-modal-back" onClick={() => dispatch(openModal('addServer'))}>
                Back
            </button>
        ),
        closeModal: () => {
            return dispatch(closeModal())
        },
        createServer: server => {
            return dispatch(createServer(server));
        }
    }
}


export default connect(mSTP, mDTP)(CreateServerModal)