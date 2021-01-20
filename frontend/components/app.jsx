import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './landing';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import ServerContainer from './server_container';

const App = props => {
    return (
        <div>
            

                <AuthRoute path="/login" component={LoginFormContainer}/>
                <AuthRoute path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/" component={Landing}/>
                <ProtectedRoute path="/server" component={ServerContainer}/>
            

            
        </div>
    )
}

export default App;