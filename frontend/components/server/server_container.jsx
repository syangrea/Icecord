import Server from './server';
import {fetchServer} from '../../actions/server_action';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { openSettingsModal } from '../../actions/settings_modal_action';
import { landingNavClick, serverClick } from '../../actions/filter_actions';
import { getChannelsInServer } from '../../utils/channel_util';
import { fetchUser } from '../../actions/user_actions';



const mSTP = (state,ownProps) => {
    // 
    return {
        server: state.entities.servers[ownProps.match.params.serverId],
        isOwner: !!state.entities.servers[ownProps.match.params.serverId] && 
            state.entities.servers[ownProps.match.params.serverId].ownerId === state.session.id,
        channels: getChannelsInServer(state, parseInt(ownProps.match.params.serverId)),
        allChannels: state.entities.channels,
        currentUserId: state.session.id
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
        },
        fetchUser: userId => {
            return dispatch(fetchUser(userId));
        },
        landingNavClick: id => {
            return dispatch(landingNavClick(id))
        }
    }
}

export default connect(mSTP, mDTP)(Server)
