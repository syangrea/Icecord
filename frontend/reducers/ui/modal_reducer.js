import { REMOVE_CHANNEL } from '../../actions/channel_actions';
import {OPEN_MODAL, CLOSE_MODAL} from '../../actions/modal_action';
import { RECEIVE_SERVER, REMOVE_SERVER, REMOVE_USER_SERVER } from '../../actions/server_action';
import { LOGOUT_CURRENT_USER } from '../../actions/session_action';

const modalReducer = (state = null, action) => {
    Object.freeze(state);
    switch(action.type){
        case OPEN_MODAL:
            return action.componentName;
        case CLOSE_MODAL:
            return null;
        case RECEIVE_SERVER:
            return null;
        case REMOVE_SERVER:
            return null;
        case REMOVE_CHANNEL:
            return null;
        case REMOVE_USER_SERVER:
            return null;
        case LOGOUT_CURRENT_USER:
            return null;
        default:
            return state; 
    }
}

export default modalReducer;