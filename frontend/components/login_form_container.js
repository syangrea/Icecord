import {connect} from 'react-redux';
import LoginForm from './login_form';
import {login, clearSessionErrors} from '../actions/session_action'

const mSTP = state => {
    return {
        error: state.errors.session[0]
    }
}

const mDTP = dispatch => {
    return {
        login: user => {
            return dispatch(login(user));
        },
        clearSessionErrors: () => {
            return dispatch(clearSessionErrors())
        }
    }
}

export default connect(mSTP, mDTP)(LoginForm);