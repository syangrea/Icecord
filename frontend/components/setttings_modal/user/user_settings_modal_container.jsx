import { connect } from "react-redux"
import { openModal } from "../../../actions/modal_action"
import { closeSettingsModal } from "../../../actions/settings_modal_action"
import React from 'react'

import UserSettingsModal from "./user_settings_modal";


const mSTP = (state, ownProps) => {
    return {
        user: state.entities.users[state.session.id],
        server: state.entities.servers[state.ui.filters.serverClicked]
    }
}

const mDTP = dispatch => {
    return {
        logoutModal: (
            <button onClick={e => dispatch(openModal('logout'))}>
                Log Out
            </button>
        ),
        closeSettingsModal: () => {
            return dispatch(closeSettingsModal())
        }
    }
}

export default connect(mSTP, mDTP)(UserSettingsModal)