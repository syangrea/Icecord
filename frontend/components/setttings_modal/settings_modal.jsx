import React from 'react';
import { connect } from 'react-redux';
import { closeSettingsModal } from '../../actions/settings_modal_action';
import ServerSettingsModalContainer from './server/server_settings_modal_container'
import UserSettingsModalContainer from './user/user_settings_modal_container'

function SettingsModal({ settingsModal, closeSettingsModal }) {
    if (!settingsModal) {
        return null;
    }

    let component;
    switch (settingsModal) {
        case 'user':
            component = <UserSettingsModalContainer />;
            break;
        case 'server':
            component = <ServerSettingsModalContainer />;
            break;
        default:
            return null;
    }

    return (
        <div  className="settings-modal">
            <div className="settings-modal-child">
                {component}
            </div>
        </div>
    )
}

const mSTP = state => {
    return {
        settingsModal: state.ui.settingsModal
    }
}

const mDTP = dispatch => {
    return {
        closeSettingsModal: () => dispatch(closeSettingsModal())
    }
}

export default connect(mSTP, mDTP)(SettingsModal);