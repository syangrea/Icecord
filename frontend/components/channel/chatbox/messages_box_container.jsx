
import { connect } from 'react-redux';
import { fetchMessages, receiveMessage, receiveMessages } from '../../../actions/message_action';
import { getChannelMessages } from '../../../utils/messages_util';
import MessagesBox from './messages_box';

const mSTP = (state, ownProps) => {
    
    return {
        messages: getChannelMessages(state, parseInt(ownProps.match.params.channelId)),
        currentUserId: state.session.id,
        channel: state.entities.channels[ownProps.match.params.channelId]
    }
}

const mDTP = dispatch => {
    return {
        receiveMessage: message => {
            return dispatch(receiveMessage(message));
        },
        receiveMessages: messages => {
            return dispatch(receiveMessages(messages));
        },
        fetchMessages: channelId => {
            return dispatch(fetchMessages(channelId));
        }

    }
}

export default connect(mSTP,mDTP)(MessagesBox)