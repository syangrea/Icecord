import { OPEN_SETTINGS_MODAL, CLOSE_SETTINGS_MODAL } from '../../actions/settings_modal_action';
import { RECEIVE_SERVER, REMOVE_SERVER} from '../../actions/server_action';
import { LOGOUT_CURRENT_USER } from '../../actions/session_action';

const settingsModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_SETTINGS_MODAL:
            return action.componentName;
        case CLOSE_SETTINGS_MODAL:
            return null;
        case RECEIVE_SERVER:
            return null;
        case LOGOUT_CURRENT_USER:
            return null;
        case REMOVE_SERVER:
            return null;
        default:
            return state;
    }
}

export default settingsModalReducer;