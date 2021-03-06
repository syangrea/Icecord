import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../../actions/session_action';
import {RECEIVE_ALL_SERVERS, RECEIVE_SERVER, REMOVE_SERVER, REMOVE_USER_SERVER} from '../../actions/server_action';

const ServersReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_SERVER:
            return Object.assign({}, state, {[action.payload.server.id]: action.payload.server})
        case REMOVE_SERVER:
            let c = Object.assign({}, state);
            delete c[action.serverId]
            return c;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, action.payload.servers)
        case REMOVE_USER_SERVER:
            let co = Object.assign({}, state);
            delete co[action.userServer.serverId];
            return co;
        case RECEIVE_ALL_SERVERS:
            let cop = Object.assign({}, state, action.payload.servers )
            return cop;
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default ServersReducer;