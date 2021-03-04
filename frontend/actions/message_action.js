// import * as MessageAPIUtil from '../utils/message_api_util';
import * as ChannelAPIUtil from '../utils/channel_api_util';
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

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

export const removeMessage = messageId => {
    return {
        type: REMOVE_MESSAGE,
        messageId
    }
}

export const fetchMessages = channelId => dispatch => {
    return ChannelAPIUtil.fetchMessages(channelId)
        .then(payload => {
            dispatch(receiveMessages(payload.messages))
        })
}

