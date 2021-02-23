import { connect } from "react-redux"
import { channelClick, setCurrentChannel } from "../../actions/filter_actions"
import { openModal } from "../../actions/modal_action"
import { openSettingsModal } from "../../actions/settings_modal_action"
import ChannelListItem from './channel_list_item'


const mSTP = (state,ownProps) => {
    return {
        isOwner: state.session.id === ownProps.server.ownerId,
        isCurrentChannel: state.ui.filters.currentChannel === ownProps.channel.id
    }
}
const mDTP = dispatch => {
    return {
        openSettingsModal: modelName => {
            return dispatch(openSettingsModal(modelName))
        },
        openModal: modalName => {
            return dispatch(openModal(modalName))
        },
        channelClick: channelId => {
            return dispatch(channelClick(channelId));
        },
        setCurrentChannel: channelId => {
            return dispatch(setCurrentChannel(channelId))
        }
    }
}

export default connect(mSTP, mDTP)(ChannelListItem)