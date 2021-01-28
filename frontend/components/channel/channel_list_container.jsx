import { connect } from "react-redux";
import { getChannelsInServer } from "../../utils/channel_util";
import ChannelList from './channel_list';

const mSTP = (state,ownProps) => {
    return {
        channels: getChannelsInServer(state, ownProps.server.id)

    }
}

const mDTP = dispatch => {
    return {

    };

}

export default connect(mSTP, mDTP)(ChannelList)