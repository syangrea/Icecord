import { connect } from 'react-redux';
import { deleteServer, fetchServer, leaveServer } from '../../../actions/server_action';
import { getUserServer } from '../../../utils/server_util';
import ServerListItem from './server_list_item';


const mSTP = (state, ownProps) => {
    return {
        userServerId: getUserServer(state, ownProps.match.params.serverId)
        
    }
}


const mDTP = dispatch => {
    return {

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