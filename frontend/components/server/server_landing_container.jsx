import {connect} from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { createServer } from '../../actions/server_action';
import { logout } from '../../actions/session_action';
import ServerLanding from './server_landing';
import React from 'react';
import {openSettingsModal} from '../../actions/settings_modal_action'

const mSTP = state => {
    return {
        user: state.entities.users[state.session.id]

    }
}

const mDTP = dispatch => {
    return {
        
        addServerModal: (
            <button onClick={e => dispatch(openModal('addServer'))}>
                <img src="https://img.icons8.com/android/24/000000/plus.png" />
            </button>
        ),

        userSettingsModal: (
            <button onClick={e => dispatch(openSettingsModal('user'))}>
                <img src="https://img.icons8.com/carbon-copy/100/000000/gear.png" />
            </button>
        )
        
    }
}

export default connect(mSTP, mDTP)(ServerLanding);