import * as ServerAPIUtil from '../utils/server_api_util';

export const RECEIVE_SERVER =  "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const REMOVE_USER_SERVER = "REMOVE_USER_SERVER"
export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";


export const receiveServer = payload => {
    return {
        type: RECEIVE_SERVER,
        payload
    }
}

export const removeServer = serverId => {
    return {
        type: REMOVE_SERVER,
        serverId
    }
}

export const removeUserServer = userServerId => {
    return {
        type: REMOVE_USER_SERVER,
        userServerId
    }
}

export const receiveServerErrors = errors => {
    return {
        type: RECEIVE_SERVER_ERRORS,
        errors
    }
}

export const fetchServer = serverId => dispatch =>{
    return ServerAPIUtil.fetchServer(serverId)
        .then(payload => dispatch(receiveServer(payload)))
        .fail(() => dispatch(receiveServerErrors(["Not a server"])));
}

export const createServer = server => dispatch => {
    return ServerAPIUtil.createServer(server)
        .then(payload => dispatch(receiveServer(payload)))
        .fail(res => dispatch(receiveServerErrors($.parseJSON(res.responseText))))
}
export const updateServer = server => dispatch => {
    return ServerAPIUtil.updateServer(server)
        .then(payload => dispatch(receiveServer(payload)))
        .fail(res => dispatch(receiveServerErrors($.parseJSON(res.responseText))))
}

export const deleteServer = serverId => dispatch => {
    return ServerAPIUtil.deleteServer(serverId)
        .then(() => dispatch(removeServer(serverId)))
        .fail(res => dispatch(receiveServerErrors($.parseJSON(res.responseText))))
}

export const joinServer = link => dispatch => {
    return ServerAPIUtil.joinServer(link)
        .then(payload => dispatch(receiveServer(payload)))
        .fail(res => dispatch(receiveServerErrors($.parseJSON(res.responseText))))
}

export const leaveServer = userServerId => dispatch =>{
    return ServerAPIUtil.leaveServer(userServerId)
        .then(() => dispatch(removeUserServer(userServerId)))
        .fail(res => dispatch(receiveServerErrors($.parseJSON(res.responseText))));
}