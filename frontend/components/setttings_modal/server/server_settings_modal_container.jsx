import { connect } from "react-redux"
import { openModal } from "../../../actions/modal_action"
import { closeSettingsModal } from "../../../actions/settings_modal_action"
import ServerSettingsModal from './server_settings_modal';
import React from 'react'

const mSTP = (state,ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        server: state.entities.servers[state.ui.filters.serverClicked]
    }
}

const mDTP = dispatch => {
    return {
        deleteServerModal: (
            <button onClick={e => dispatch(openModal('deleteServer'))}>
                Delete Server
            </button>
        ),
        closeSettingsModal: () => {
            return dispatch(closeSettingsModal())
        }
    }
}

export default connect(mSTP, mDTP)(ServerSettingsModal)