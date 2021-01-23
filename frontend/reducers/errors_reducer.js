import {combineReducers} from 'redux';
import sessionErrorsReducer from './errors/session_errors_reducer';
import serverErrorsReducer from './errors/server_errors_reducer';


const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    server: serverErrorsReducer
})

export default errorsReducer;