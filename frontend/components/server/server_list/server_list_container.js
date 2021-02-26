import { connect } from 'react-redux';
import ServerList from './server_list';
import { createServer, deleteServer, fetchServer, joinServer, leaveServer } from '../../../actions/server_action';

const mSTP = state => {
    return {
        servers: Object.values(state.entities.servers).filter(server => {
            return !server.directMessage
        }),
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