import React from 'react';
import { connect } from 'react-redux';
import { closeModal, openModal } from '../../../actions/modal_action';
import { joinServer} from '../../../actions/server_action';

import JoinServerModal from './join_server_modal';


const mSTP = (state, ownProps) => {
    return {
        errors: state.errors.server
    }
}

const mDTP = dispatch => {
    return {
        addServerModal: (
            <button onClick={() => dispatch(openModal('addServer'))}>
                Back
            </button>
        ),
        closeModal: () => {
            return dispatch(closeModal())
        },
        joinServer: link => {
            return dispatch(joinServer(link));
        }
    }
}


export default connect(mSTP, mDTP)(JoinServerModal)