import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_action';
import { leaveServer } from '../../../actions/server_action';
import { getUserServer } from '../../../utils/server_util';
import LeaveServerModal from './leave_server_modal';

const mSTP = (state, ownProps) => {
    return {
        userServerId: getUserServer(state, state.ui.filters.serverClicked),
        server: state.entities.servers[state.ui.filters.serverClicked]
    }
}

const mDTP = dispatch => {
    return {
          leaveServer: userServerId => {
              return dispatch(leaveServer(userServerId));
          },
          closeModal: () => {
              return dispatch(closeModal())
          }
    }
}


export default connect(mSTP, mDTP)(LeaveServerModal)
