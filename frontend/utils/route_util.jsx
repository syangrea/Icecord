import React from 'react'
import {connect} from 'react-redux';
import { withRouter, Route, Redirect} from 'react-router-dom'

const Auth = ({exact, path, loggedIn, component: Component}) => {
    return (
        <Route path={path}
            exact={exact}
            render={props => {
                // 
                return loggedIn ? <Redirect to="/server/home"/> : <Component {...props}/>
            }}
        />
    )
}

const Protected = ({exact, path, loggedIn, component: Component}) => {
    return (
        <Route path={path}
            exact={exact}
            render={props => {
                return loggedIn ? <Component {...props} /> : <Redirect to="/login"/>
            }}
        />
    )
}

const mSTP = state => {
    return {
        loggedIn: Boolean(state.session.id)
    }
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));