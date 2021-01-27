import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_action';
import ServerListItem from './server_list_item';
import {openSettingsModal} from '../../../actions/settings_modal_action';

import { serverClick } from '../../../actions/filter_actions';


const mSTP = (state, ownProps) => {
    debugger
    return {
        isOwner: ownProps.server.ownerId === state.session.id
        
    }
}


const mDTP = dispatch => {
    // debugger
    return {
        openModal: modalName => {
            return dispatch(openModal(modalName))
        },
        openSettingsModal: settingsModalName => {
            return dispatch(openSettingsModal(settingsModalName))
        },
        serverClick: (serverId) => {
            return dispatch(serverClick(serverId));
        }
        
    }
}

export default connect(mSTP, mDTP)(ServerListItem);