import Server from './server';
import {fetchServer} from '../../actions/server_action';
import { connect } from 'react-redux';



const mSTP = (state,ownProps) => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        fetchServer: serverId => {
            return dispatch(fetchServer(serverId));
        }, 
    }
}

export default connect(mSTP, mDTP)(Server)
