import { connect } from 'react-redux';
import { deleteServer, fetchServer, leaveServer } from '../../../actions/server_action';
import ServerListItem from './server_list_item';

const mSTP = (state, ownProps) => {
    return {
        userServerId: Object.keys(state.entities.userServers)
            .find(userServer => {
                return userServer.userId === state.session.id 
                    && userServer.serverId === ownProps.server.id
            }),
        
    }
}


const mDTP = dispatch => {
    return {

        fetchServer: serverId => {
            return dispatch(fetchServer(serverId))
        },
        
        updateServer: server => {
            return dispatch(updateServer(server))
        },
        deleteServer: serverId => {
            return dispatch(deleteServer(serverId))
        },
        
        leaveServer: userServerId => {
            return dispatch(leaveServer(userServerId));
        }
    }
}

export default connect(mSTP, mDTP)(ServerListItem);