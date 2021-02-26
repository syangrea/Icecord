import {CHANNEL_CLICK, LANDING_NAV_CLICK, SERVER_CLICK, SET_CURRENT_CHANNEL, SET_CURRENT_DM_USER_ID} from '../../actions/filter_actions';
import { CLOSE_MODAL } from '../../actions/modal_action';
import { REMOVE_SERVER, REMOVE_USER_SERVER } from '../../actions/server_action';
import { CLOSE_SETTINGS_MODAL } from '../../actions/settings_modal_action';

const filtersReducer = (state = {serverClicked: null, landingNavClicked: null}, action) => {
    Object.freeze(state);
    switch(action.type){
        case SERVER_CLICK:
            return Object.assign({}, state, {serverClicked: action.serverId})
        case LANDING_NAV_CLICK:
            return Object.assign({}, state, { landingNavClicked: action.id })
        case SET_CURRENT_CHANNEL:
            return Object.assign({}, state, { currentChannel: action.channelId })
        case SET_CURRENT_DM_USER_ID:
            return Object.assign({}, state, { currentDMUserId: action.userId })
        case CHANNEL_CLICK:
            return Object.assign({}, state, {channelClicked: action.channelId})
        case CLOSE_SETTINGS_MODAL:
            return Object.assign({}, state, { serverClicked: null })
        case REMOVE_SERVER:
            return Object.assign({}, state, { serverClicked: null });
        case REMOVE_USER_SERVER: 
            return Object.assign({}, state, { serverClicked: null });
        
        default: 
            return state;
    }
}

export default filtersReducer;

