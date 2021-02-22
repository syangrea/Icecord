import { RECEIVE_CHANNEL, RECEIVE_CHANNEL_ERRORS } from '../../actions/channel_actions';
import {LOGOUT_CURRENT_USER} from '../../actions/session_action';



const ChannelErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHANNEL_ERRORS:
            return action.errors;
        case RECEIVE_CHANNEL:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default: 
            return state;
    }
}

export default ChannelErrorsReducer;