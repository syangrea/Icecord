import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store'
import * as SessionActions from './actions/session_action';
window.SessionActions = SessionActions;
import Root from './components/root'
import * as ServerAction from "./actions/server_action";


window.ServerAction = ServerAction;

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