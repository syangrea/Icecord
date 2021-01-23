import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../../actions/session_action';
import {RECEIVE_SERVER} from '../../actions/server_action';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.payload.user.id]: action.payload.user});
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.payload.users);
        default:
            return state;
    
    }
}

export default usersReducer;