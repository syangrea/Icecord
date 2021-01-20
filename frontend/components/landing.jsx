import React from 'react';
import {Link} from 'react-router-dom';

const Landing = props => {
    return (
        <div id="landing">
            <div id="landing-home">
                <div className="landing-content">
                    <header>
                        <img src="https://img.icons8.com/fluent/48/000000/discord-new-logo.png" />                        <div id="session-links">
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </div>
                    </header>
                    <h1>Your place to talk</h1>
                    <h3>
                        Whether you’re part of a school club, gaming group, worldwide art community,
                        or just a handful of friends that want to spend time together, Discord makes
                        it easy to talk every day and hang out more often.
                    </h3>
                    <a href="#">Github</a>
                    <a href="#">Try Demo</a>
                    <img src="https://discord.com/assets/7df86467c3079db32f8a48aeadc450ca.svg" alt="" />
                </div>
                
            </div>
            <div id="landing-body">
                <div id="landing-body-1" className="landing-content"><p>h</p></div>
                <div id="landing-body-2" className="landing-content"><p>h</p></div>
                <div id="landing-body-3" className="landing-content"><p>h</p></div>
                <div id="landing-body-4" className="landing-content"><p>h</p></div>
            </div>
            <div id="landing-footer">
                <footer>

                </footer>
            </div>
        </div>
    )
}

export default Landing;