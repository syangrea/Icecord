import Server from './server';
import {fetchServer} from '../../actions/server_action';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { openSettingsModal } from '../../actions/settings_modal_action';
import { serverClick } from '../../actions/filter_actions';
import { getChannelsInServer } from '../../utils/channel_util';



const mSTP = (state,ownProps) => {
    // 
    return {
        server: state.entities.servers[ownProps.match.params.serverId],
        isOwner: state.entities.servers[ownProps.match.params.serverId].ownerId === state.session.id,
        channels: getChannelsInServer(state, parseInt(ownProps.match.params.serverId))
        
    }
}

const mDTP = dispatch => {
    return {
        fetchServer: serverId => {
            return dispatch(fetchServer(serverId));
        }, 
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

export default connect(mSTP, mDTP)(Server)
