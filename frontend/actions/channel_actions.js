import * as ChannelAPIUtil from '../utils/channel_api_util';

export const RECEIVE_CHANNEL = "RECEIVE_CHANNEL";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const REMOVE_CHANNEL = "REMOVE_CHANNEL";

export const receiveChannel = payload => {
    return {
        type: RECEIVE_CHANNEL,
        payload
    }
}

export const receiveChannelErrors = errors => {
    return {
        type: RECEIVE_CHANNEL_ERRORS,
        errors
    }
}

export const removeChannel = channelId => {
    return {
        type: REMOVE_CHANNEL,
        channelId
    }
}

export const createChannel = channel => dispatch => {
    return ChannelAPIUtil.createChannel(channel)
        .then(payload => dispatch(receiveChannel(payload)))
        .fail(res => dispatch(receiveChannelErrors($.parseJSON(res.responseText))))
}

export const updateChannel = channel => dispatch => {
    return ChannelAPIUtil.updateChannel(channel)
        .then(payload => dispatch(receiveChannel(payload)))
        .fail(res => dispatch(receiveChannelErrors($.parseJSON(res.responseText))))
}

export const deleteChannel = channelId => dispatch => {
    return ChannelAPIUtil.deleteChannel(channelId)
        .then(() => dispatch(removeChannel(channelId)))
        .fail(res => dispatch(receiveChannelErrors($.parseJSON(res.responseText))))
}