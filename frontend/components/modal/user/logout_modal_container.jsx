import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_action';

import { logout } from '../../../actions/session_action';

import LogoutModal from './logout_modal';


const mSTP = (state, ownProps) => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        logout: () => {
            return dispatch(logout())
        },
        closeModal: () => {
            return dispatch(closeModal())
        }
    }
}


export default connect(mSTP, mDTP)(LogoutModal)