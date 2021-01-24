import {connect} from 'react-redux';
import { createServer } from '../../actions/server_action';
import { logout } from '../../actions/session_action';
import ServerLanding from './server_landing';

const mSTP = state => {
    return {
        

    }
}

const mDTP = dispatch => {
    return {
        logout: () => {
            return dispatch(logout());
        },
        createServer: server => {
            return dispatch(createServer(server));
        }
        
    }
}

export default connect(mSTP, mDTP)(ServerLanding);