import React from 'react';
import {Route} from 'react-router-dom';
import Landing from './landing'

const App = props => {
    return (
        <div>
            <Route to="/" component={Landing}/>
            <Route to="/signup" />
            <Route to="/login" />
        </div>
    )
}

export default App;