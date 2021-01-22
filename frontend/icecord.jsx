import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import * as SessionActions from './actions/session_action';
window.SessionActions = SessionActions;
import Root from './components/root'
import * as ServerApiUtil from './utils/server_api_util';
import * as UserServerApiUtil from './utils/user_server_api_util';

window.ServerApiUtil = ServerApiUtil;
window.UserServerApiUtil = UserServerApiUtil;

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    // debugger
    if(window.currentUser){
        
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: currentUser
                 }
                 
            },
            session: {
                id: window.currentUser.id
            }
        }
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        store = configureStore();
    }

    window.store = store;
    ReactDOM.render(<Root store={store} />, root)
})