import React from 'react';
import { connect } from 'react-redux';
import { closeSettingsModal } from '../../actions/settings_modal_action';

function SettingsModal({ settingsModal, closeSettingsModal }) {
    if (!settingsModal) {
        return null;
    }

    let component;
    switch (settingsModal) {
        case 'user':

        case 'server':

        default:
            return null;
    }

    return (
        <div className="settings-modal-background" onClick={closeSettingsModal}>
            <div className="setting-modal-child" onClick={e => e.stopPropagation()}>
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