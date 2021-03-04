import { RECEIVE_MESSAGE, RECEIVE_MESSAGES, REMOVE_MESSAGE } from '../../actions/message_action';
import { LOGOUT_CURRENT_USER } from '../../actions/session_action'
import {RECEIVE_SERVER} from '../../actions/server_action'
import { RECEIVE_CHANNEL } from '../../actions/channel_actions';


const MessagesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_MESSAGE:
            return Object.assign({}, state, {[action.message.id]: action.message});
        case REMOVE_MESSAGE:
            let c = Object.assign({}, state);
            delete c[action.messageId];
            return c;
        case RECEIVE_MESSAGES:
            return Object.assign({}, action.messages);
        case RECEIVE_CHANNEL:
            return Object.assign({}, action.payload.messages);
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.payload.messages)
        default:
            return state;
    }
}

export default MessagesReducer;