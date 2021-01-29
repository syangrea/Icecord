import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../../actions/message_action';
import { LOGOUT_CURRENT_USER } from '../../actions/session_action'
import {RECEIVE_SERVER} from '../../actions/server_action'


const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message});
        case RECEIVE_MESSAGES:
            return Object.assign({}, action.messages);
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_SERVER:
            return Object.assign({}, action.payload.messages)
        default:
            return state;
    }
}

export default MessagesReducer;