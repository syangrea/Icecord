import {connect} from 'react-redux';
import { logout } from '../actions/session_action';
import Server from './server';

const mSTP = state => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        logout: () => {
            return dispatch(logout());
        }
    }
}

export default connect(mSTP, mDTP)(Server);