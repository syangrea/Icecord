import {LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER} from '../../actions/session_action'
import { RECEIVE_SERVER, REMOVE_SERVER, REMOVE_USER_SERVER } from '../../actions/server_action';
import { RECEIVE_CHANNEL, REMOVE_CHANNEL } from '../../actions/channel_actions';

const ChannelsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SERVER:
            return Object.assign({}, state, action.payload.channels)
        case REMOVE_SERVER:
            let c = Object.assign({}, state);
            for(const prop in c){
                if(c[prop].serverId === action.serverId){
                    delete c[prop];
                }
            }
            
            return c;

        case REMOVE_USER_SERVER:
            let co = Object.assign({}, state);
            for(const property in co){
                if(co[property].serverId === action.userServer.serverId){
                    delete co[property]
                }
            }
            
            return co;
        case RECEIVE_CHANNEL:
            return Object.assign({}, state, {[action.payload.channel.id] : action.payload.channel})
        case REMOVE_CHANNEL:
            let copy = Object.assign({},state);
            delete copy[action.channelId];
            return copy;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.channels)
        case LOGOUT_CURRENT_USER:
            return {}
        default:
            return state;
    }
}

export default ChannelsReducer;