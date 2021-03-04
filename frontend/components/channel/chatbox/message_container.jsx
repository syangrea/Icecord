import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { joinServer } from "../../../actions/server_action"
import { openSettingsModal } from "../../../actions/settings_modal_action"
import { getPrivateChannel } from "../../../utils/private_message_util"
import Message from "./message"


const mSTP = (state, ownProps) => {
    
    return {
        privateChannel: getPrivateChannel(state, state.entities.users[ownProps.message.userId]),
        user: state.entities.users[ownProps.message.userId],
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    return {
        createPrivateServer: server => {
            return dispatch(createServer(server))
        },
        joinServer: (link,id) => {
            return dispatch(joinServer(link,id))
        },
        openUserSettings: () => dispatch(openSettingsModal('user'))
    }
}

export default withRouter(connect(mSTP, mDTP)(Message))