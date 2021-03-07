import { connect } from "react-redux";
import { landingNavClick, setCurrentChannel } from "../../actions/filter_actions";
import { closeModal, openModal } from "../../actions/modal_action";
import { getChannelsInServer } from "../../utils/channel_util";
import ChannelList from './channel_list';

const mSTP = (state,ownProps) => {
    return {
        channels: getChannelsInServer(state, ownProps.server.id)

    }
}

const mDTP = dispatch => {
    return {
        openModal: modalName => {
            return dispatch(openModal(modalName))
        },
        setCurrentChannel: id => {
            return dispatch(setCurrentChannel(id))
        }
        
    };

}

export default connect(mSTP, mDTP)(ChannelList)