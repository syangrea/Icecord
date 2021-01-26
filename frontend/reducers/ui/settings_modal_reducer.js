import { OPEN_SETTINGS_MODAL, CLOSE_SETTINGS_MODAL } from '../../actions/modal_action';

const settingsModalReducer = (state = null, action) => {
    Object.freeze(state);
    switch (action.type) {
        case OPEN_SETTINGS_MODAL:
            return action.componentName;
        case CLOSE_SETTINGS_MODAL:
            return "";
        default:
            return state;
    }
}

export default settingsModalReducer;