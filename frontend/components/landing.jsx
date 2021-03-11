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

                            <a className="link-size-big" href="https://github.com/syangrea" target="_blank">Github</a>
                            <Link to="/login" className="link-size-big">Try Demo</Link>
                        </div>

                    </div>
                    
                </div>
                <div id="background-wallpaper">
                    {/* <h1>pep</h1> */}
                    
                </div>
                
            </div>
            <div id="landing-body">
                <div id="landing-body-1">
                    <div className="landing-content">
                        <img src="https://raw.githubusercontent.com/asiddiki98/TalentShare/main/frontend/src/assets/images/category_demo.gif" alt=""/>
                        <div className="landing-body-description">
                            <h1>Talent Share - MERN and WebSockets</h1>
                            <p>A social media application for artists, photographers, musicians, 
                                and dancers to share their work. Built with instant 
                                messaging feature to allow artists and potential
                                recruiters/clients to connect.
                            </p>
                        </div>
                    </div>
                </div>
                <div id="landing-body-2">
                    <div className="landing-content">

                        
                        <div className="landing-body-description">
                            <h1>FightRPS - Three.js and Javascipt</h1>
                            <p>3D Rock, Papers, Scissors where spacing and timing matters. 
                                Built with Three.js for rendering 3D models and animations
                                and Vanilla Javascript for DOM manipulation and game logic.
                            </p>
                        </div>
                        <img src="https://raw.githubusercontent.com/syangrea/FightRPS/main/images/gamecanvasgif.gif" alt="" />
                    </div>
                </div>
                
                <div id="landing-body-4">
                    <div className="landing-content">

                        
                        <div className="landing-body-4-description">
                            <h1>Icecord - Rails, React and ActionCable</h1>
                            <p>Icecord is a chat application that allows users to be in 
                                servers that act as a small community for it's members. 
                                Within each server, there are channels, allowing server
                                members to chat about different topics at the same time 
                                without cluttering a single chat.
                            </p>
                        </div>
                        <img id="landing-big-img" src="https://raw.githubusercontent.com/syangrea/Icecord/main/readme_images/channel_demo.gif" alt="" />
                        
                    </div>
                </div>
                <div id="landing-body-5">
                    <div className="landing-content">
                        <h3>Ready to hire me?</h3>
                        <img src="https://discord.com/assets/a188414ce83f2454b9d71a47c3d95909.svg" alt="" />
                        <a className="link-size-big" href="#" target="_blank">My Portfolio</a>
                    </div>
                </div>
                    
            </div>
            <div id="landing-footer">
                <footer>
                    <div className="landing-content">
                        <div>
                            <h3>My Place To Talk</h3>
                            <div>
                                <span>Undergraduate</span> Computer Science BS - University at Buffalo - December 2019
                                <br/>
                                <span>Full Stack Software Engineer Program</span> App Academy - February 2021
                                <br/>
                                <span>About Me</span>
                                I am a Software Engineer that likes learning new technology and exploring
                                    different fields of Computer Science.  I am critical about clean, scalable
                                    , and efficient code. Outside of being a developer, I am passionate
                                    about health, exercise, and gaming. 
                                <br/>
                                <span>Why I have to be a developer:</span>
                                
                                1. I love problem solving and am good at it.
                                <br/>                                
                                2. Technology is the future and I want take part in shaping it. 

                            </div>
                        </div>
                        <div>
                            <div>
                                <h5>Projects</h5>
                                <ul>
                                    <li><a href="https://github.com/syangrea/Icecord" target="_blank">Icecord</a></li>
                                    <li><a href="https://github.com/asiddiki98/TalentShare" target="_blank">TalentShare</a></li>
                                    <li><a href="https://github.com/syangrea/FightRPS" target="_blank">FightRPS</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Links</h5>
                                <ul>
                                    <li><a href="https://github.com/syangrea" target="_blank">GitHub</a></li>
                                    <li><a href="https://www.linkedin.com/in/syangrea/" target="_blank">LinkedIn</a></li>
                                    <li><a href="https://angel.co/u/stephen-yang-8" target="_blank">AngelList</a></li>
                                    <li><a href="" target="_blank">Portfolio</a></li>
                                </ul>
                            </div>
                            <div>
                                <h5>Technology</h5>
                                <ul>
                                    <li>React</li>
                                    <li>Redux</li>
                                    <li>Express</li>
                                    <li>Rails</li>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                    <li>Three.js</li>
                                    <li>WebSockets</li>
                                    <li>AWS</li>
                                    <li>Blockchain</li>
                                    <li>Java</li>
                                    <li>JavaScript</li>
                                    <li>Python</li>
                                    <li>Ruby</li>
                                    <li>C++</li>
                                    <li>C#</li>

                                </ul>
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