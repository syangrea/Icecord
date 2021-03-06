import * as SessionAPIUtil from '../utils/session_api_util'

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS"

export const receiveCurrentUser = payload => {
    return {
        type: RECEIVE_CURRENT_USER,
        payload
    }

} 

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = errors => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}

export const clearSessionErrors = () => {
    return {
        type: CLEAR_SESSION_ERRORS
    }
}

export const signup = formUser => dispatch => {
    return SessionAPIUtil.signup(formUser)
                .then(res => dispatch(receiveCurrentUser(res)))
                .fail(res => {
                    dispatch(receiveErrors($.parseJSON(res.responseText)));
                    
                });
}

export const login = formUser => dispatch => {
    return SessionAPIUtil.login(formUser)
                .then(res => dispatch(receiveCurrentUser(res)))
                .fail(res => {
                    return dispatch(receiveErrors($.parseJSON(res.responseText)));
                    
                });
}

export const logout = () => dispatch => {
    return SessionAPIUtil.logout()
                .then(() => dispatch(logoutCurrentUser()))
                .fail(res => dispatch(receiveErrors($.parseJSON(res.responseText))));
}

