import {signup, login, logout} from '../actions/session_action';
import {connect} from 'react-redux';
import SignupForm from './signup_form';

const mSTP = state => {
    return {
        errors: state.errors.session
    }
}

const mDTP = dispatch => {
    return {
        signup: user => {
            return dispatch(signup(user));
        }
    }
}

export default connect(mSTP, mDTP)(SignupForm)