import React from 'react';
import {Link} from 'react-router-dom';

const Landing = props => {
    return (
        <div id="landing">
            <img src="" alt=""/> 
            <div id="session-links">
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
            <h1>Your place to talk</h1>
            <h3>
                Whether you’re part of a school club, gaming group, worldwide art community, 
                or just a handful of friends that want to spend time together, Discord makes 
                it easy to talk every day and hang out more often.
            </h3>
            <a href="#">Github</a>
            <a href="#">Try Demo</a>
        </div>
    )
}

export default Landing;