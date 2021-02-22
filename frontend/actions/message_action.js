// import * as MessageAPIUtil from '../utils/message_api_util';
import * as ChannelAPIUtil from '../utils/channel_api_util';
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";

export const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message
    }

}

export const receiveMessages = messages => {
    return {
        type: RECEIVE_MESSAGES,
        messages
    }
}

export const fetchMessages = channelId => dispatch => {
    return ChannelAPIUtil.fetchMessages(channelId)
        .then(payload => {
            dispatch(receiveMessages(payload.messages))
        })
}

