import * as UserAPIUtil from '../utils/user_api_util'
import { receiveCurrentUser, receiveErrors } from './session_action';



export const patchUser = formUser => dispatch => {
    return UserAPIUtil.patchUser(formUser)
        .then(res => dispatch(receiveCurrentUser(res)))
        .fail(res => {
            dispatch(receiveErrors($.parseJSON(res.responseText)));
            
        });
}
export const patchUserPhoto = (formUser, currentUserId) => dispatch => {
    return UserAPIUtil.patchUserPhoto(formUser,currentUserId)
        .then(res => dispatch(receiveCurrentUser(res)))
        .fail(res => {
            dispatch(receiveErrors($.parseJSON(res.responseText)));
            
        });
}

export const fetchUser = userId => dispatch => {
    return UserAPIUtil.fetchUser(userId)
        .then(res => dispatch(receiveCurrentUser(res)))
}