import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_action';
import ServerListItem from './server_list_item';
import {openSettingsModal} from '../../../actions/settings_modal_action';

import { landingNavClick, serverClick } from '../../../actions/filter_actions';


const mSTP = (state, ownProps) => {
    
    return {
        isOwner: ownProps.server.ownerId === state.session.id,
        isNavClicked: ownProps.server.id === state.ui.filters.landingNavClicked,
        defaultChannel: Object.values(state.entities.channels).filter(channel => {
            return channel.serverId === ownProps.server.id
        })[0]
        
    }
}


const mDTP = dispatch => {
    
    return {
        openModal: modalName => {
            return dispatch(openModal(modalName))
        },
        openSettingsModal: settingsModalName => {
            return dispatch(openSettingsModal(settingsModalName))
        },
        serverClick: (serverId) => {
            return dispatch(serverClick(serverId));
        },

        landingNavClick: id => {
            return dispatch(landingNavClick(id))
        }
        
    }
}

export default connect(mSTP, mDTP)(ServerListItem);