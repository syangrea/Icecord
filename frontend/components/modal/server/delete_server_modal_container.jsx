import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_action';
import { deleteServer } from '../../../actions/server_action';

import DeleteServerModal from './delete_server_modal';


const mSTP = (state, ownProps) => {
    return {
        
        server: state.entities.servers[state.ui.filters.serverClicked]
    }
}

const mDTP = dispatch => {
    return {
        deleteServer: serverId => {
            return dispatch(deleteServer(serverId));
        },
        closeModal: () => {
            return dispatch(closeModal())
        }
    }
}


export default connect(mSTP, mDTP)(DeleteServerModal)