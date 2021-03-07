import { connect } from 'react-redux';
import ServerList from './server_list';
import { createServer, deleteServer, fetchServer, joinServer, leaveServer } from '../../../actions/server_action';
import { getCurrentUserServers } from '../../../utils/server_util';

const mSTP = state => {
    return {
        servers: getCurrentUserServers(state),
        errors: state.errors.server,

    }
}

const mDTP = dispatch => {
    return {
        
       
        createServer: server => {
            return dispatch(createServer(server));
        },
        joinServer: link => {
            return dispatch(joinServer(link));
        }
        
    }
}

export default connect(mSTP, mDTP)(ServerList);