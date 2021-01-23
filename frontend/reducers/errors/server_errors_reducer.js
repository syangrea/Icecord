import {RECEIVE_SERVER, RECEIVE_SERVER_ERRORS} from '../../actions/server_action';
import {LOGOUT_CURRENT_USER} from '../../actions/session_action';



const ServerErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SERVER_ERRORS:
            return action.errors;
        case RECEIVE_SERVER:
            return [];
        case LOGOUT_CURRENT_USER:
            return [];
        default: 
            return state;
    }
}

export default ServerErrorsReducer;