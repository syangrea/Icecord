import {connect} from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { createServer, fetchServer } from '../../actions/server_action';
import { logout } from '../../actions/session_action';
import ServerLanding from './server_landing';
import React from 'react';
import {openSettingsModal} from '../../actions/settings_modal_action'
import { landingNavClick } from '../../actions/filter_actions';
import { getPrivateServers } from '../../utils/server_home_util';

const mSTP = state => {
    // 
    return {
        privateServers: getPrivateServers(state),
        user: state.entities.users[state.session.id],
        navClicked: state.ui.filters.landingNavClicked

    }
}

const mDTP = dispatch => {
    return {
        
        addServerModal: (
            <li className="nav-icon" onClick={e => dispatch(openModal('addServer'))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" /></svg>
            </li>
        ),

        userSettingsModal: (
            <button onClick={e => dispatch(openSettingsModal('user'))}>
                <img src="https://img.icons8.com/material/24/ffffff/gear.png" />
            </button>
        ),

        landingNavClick: id => {
            return dispatch(landingNavClick(id))
        },
        fetchServer: serverId => {
            return dispatch(fetchServer(serverId))
        },
        
    }
    
}

export default connect(mSTP, mDTP)(ServerLanding);