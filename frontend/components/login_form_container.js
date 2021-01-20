import {connect} from 'react-redux';
import LoginForm from './login_form';
import {login} from '../actions/session_action'

const mSTP = state => {
    return {
        error: state.errors.session[0]
    }
}

const mDTP = dispatch => {
    return {
        login: user => {
            return dispatch(login(user));
        }
    }
}

export default connect(mSTP, mDTP)(LoginForm);