import React from 'react';
import {Link} from 'react-router-dom';

const Landing = props => {
    return (
        <div id="landing">
            <div id="landing-home">
                <div className="landing-content landing-home-content">
                    <header>
                        <img className="discord-logo" src={window.discordLogo} alt=""/>
                        <div id="session-links">
                            <Link className="link-size-small" to="/login">Login</Link>
                            
                        </div>
                    </header>
                    <div id="landing-home-body">
                        <h1>Your place to talk</h1>
                        <h3>
                            Whether you’re part of a school club, gaming group, worldwide art community,
                            or just a handful of friends that want to spend time together, Discord makes
                            it easy to talk every day and hang out more often.
                        </h3>
                        <div id="landing-home-links">

                            <a className="link-size-big" href="#">Github</a>
                            <Link to="/login" className="link-size-big">Try Demo</Link>
                        </div>

                    </div>
                    
                </div>
                <div id="background-wallpaper">
                    {/* <h1>pep</h1> */}
                    <img id="background-cone-1" className="background-wallpaper-image" src="https://discord.com/assets/11ebd3cd1712fe17b647d846559d7559.svg" alt=""/>
                    <img id="background-cone-2" className="background-wallpaper-image" src="https://discord.com/assets/d70fa33128cb72c4092abac7a0d25ed2.svg" alt=""/>
                    <img id="background-cone-3" className="background-wallpaper-image" src="https://discord.com/assets/7df86467c3079db32f8a48aeadc450ca.svg" alt=""/>
                    <img id="background-cone-4" className="background-wallpaper-image" src="https://discord.com/assets/6623b6310d590ec9be669189f4aa813a.svg" alt=""/>
                    <img id="background-diamond" className="background-wallpaper-image" src="https://discord.com/assets/5cc3db60569965c8bd92a05f6cb09b8d.svg" alt=""/>
                    <img id="background-back-houses" className="background-wallpaper-image" src="https://discord.com/assets/edaebb01cd24df779f6feae9a34bd7d8.svg" alt=""/>
                    <img id="background-left-house" className="background-wallpaper-image" src="https://discord.com/assets/e92fcc9ab6e63c1a17e954af347a1f1d.svg" alt=""/>
                    <img id="background-right-house" className="background-wallpaper-image" src="https://discord.com/assets/7b01f72a2054561145b6dd04add417c0.svg" alt=""/>
                </div>
                
            </div>
            <div id="landing-body">
                <div id="landing-body-1">
                    <div className="landing-content">
                        <img src="https://discord.com/assets/c01c644bc9fa2a28678ae2f44969d248.svg" alt=""/>
                        <div className="landing-body-description">
                            <h1>An invite-only place with plenty of room to talk</h1>
                            <p>Icecord servers are organized into topic-based chanels where you can 
                                collaborate, share, and just talk about your day without clogging up a group chat.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="landing-body-2">
                    <div className="landing-content">

                        
                        <div className="landing-body-description">
                            <h1>Where hanging out is easy</h1>
                            <p>Grab a seat in a voice channel when you’re free. Friends in your server can 
                                see you’re around and instantly pop in to talk without having to call.
                            </p>
                        </div>
                        <img src="https://discord.com/assets/98c9edf635a98377ec579aaa19ed47be.svg" alt="" />
                    </div>
                </div>
                <div id="landing-body-3">
                    <div className="landing-content">

                        <img src="https://discord.com/assets/9184fcadc2e3c84650dd4b075850d3d6.svg" alt="" />
                        <div className="landing-body-description">
                            <h1>From a few to a fandom</h1>
                            <p>
                                Get a community of any size running with moderation tools and custom 
                                member access. Give members special powers, set up private channels, and more.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="landing-body-4">
                    <div className="landing-content">

                        
                        <div className="landing-body-4-description">
                            <h1>Reliable tech for staying close</h1>
                            <p>Low-latency voice and video feels like you’re in the same room. 
                                Wave hello over video, watch friends stream their games, or gather up and 
                                have a drawing session with screen share.
                            </p>
                        </div>
                        <img id="landing-big-img" src="https://discord.com/assets/f61264d792fd2556a618c95d97b5de07.svg" alt="" />
                        
                    </div>
                </div>
                <div id="landing-body-5">
                    <div className="landing-content">
                        <h3>Ready to hire me?</h3>
                        <img src="https://discord.com/assets/a188414ce83f2454b9d71a47c3d95909.svg" alt="" />
                        <a className="link-size-big"href="#">My Portfolio</a>
                    </div>
                </div>
                    
            </div>
            <div id="landing-footer">
                <footer>
                    <div className="landing-content">
                        <div>
                            <h3>My place to talk</h3>
                        </div>
                        <div>
                            <div>
                                <h5>Technology</h5>
                                
                            </div>
                            <div>
                                <h5>Projects</h5>

                            </div>
                            <div>
                                <h5>Links</h5>

                            </div>

                        </div>
                    </div>
                    <div className="landing-content">
                        <img className="discord-logo" src={window.discordLogo} alt="" />
                        <Link className="link-size-small" to="/signup">Sign Up</Link>
                    </div>
                    
                </footer>
            </div>
        </div>
    )
}

export default Landing;