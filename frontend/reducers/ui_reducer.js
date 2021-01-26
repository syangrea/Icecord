const { combineReducers } = require("redux");
import filtersReducer from './ui/filters_reducer';
import modalReducer from './ui/modal_reducer'
import settingModalReducer from './ui/settings_modal_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    settingsModal: settingModalReducer,
    filters: filtersReducer
})

export default uiReducer;