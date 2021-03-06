import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Landing from './landing';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import ServerLandingContainer from './server/server_landing_container';
import Modal from './modal/modal';
import SettingsModal from './setttings_modal/settings_modal';

const App = props => {
    return (
        <div id="app">
                <SettingsModal />
                <Modal />

                <AuthRoute path="/login" component={LoginFormContainer}/>
                <AuthRoute path="/signup" component={SignupFormContainer}/>
                <AuthRoute exact path="/" component={Landing}/>
                <ProtectedRoute path="/server" component={ServerLandingContainer}/>
                
            
            
            

            
        </div>
    )
}

export default App;