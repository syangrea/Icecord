import {signup, clearSessionErrors} from '../actions/session_action';
import {connect} from 'react-redux';
import SignupForm from './signup_form';
import {parseErrors} from '../utils/session_form_util';

const mSTP = state => {
    return {
        errors: parseErrors(state)
    }
}

const mDTP = dispatch => {
    return {
        signup: user => {
            return dispatch(signup(user));
        },
        clearSessionErrors: () => {
            return dispatch(clearSessionErrors())
        }
    }
}

export default connect(mSTP, mDTP)(SignupForm)