import { connect } from "react-redux"
import { openModal } from "../../../actions/modal_action"
import ServerContextMenu from "./server_context_menu"
import React from 'react'

const mSTP = (state, ownProps) => {
    return {
        isOwner: ownProps.serverOwner === state.session.id,

    }
}

const mDTP = dispatch => {
    return {
        invitePeopleModal: (
            <button onClick={e => dispatch(openModal('invitePeople'))}>
                Invite People
            </button>
        ),
        serverSettingsModal: (
            <button onClick={e => dispatch(openSettingsModal('server'))}>
                Server Settings
            </button>
        ),
        leaveServerModal: (
            <button onClick={e => dispatch(openModal('leaveServer'))}>
                Leave Server
            </button>
        )
    }
}

export default connect(mSTP, mDTP)(ServerContextMenu)