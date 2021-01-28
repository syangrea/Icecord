import React from 'react';
import {Route, Link} from 'react-router-dom';
import ServerContainer from './server_container';
import ServerListContainer from './server_list/server_list_container';

export default class ServerLanding extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        return this.props.logout().then(() =>{
            this.props.history.push("/")
        });
    }

    handleNavClick(id){
        return e => {
            return this.props.landingNavClick(id);
        }
    }

    render(){
        return (
            <div id="server-landing">
                <div id="server-nav-bar">
                    <li onClick={this.handleNavClick(-1)} id="server-home-icon" className={`${this.props.navClicked === -1 ? "nav-clicked" : null}`}>
                        <Link to="/server/home">
                            <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" /> 
                        </Link>
                    </li>
                    <div id="nav-divider-line"></div>
                    <ServerListContainer />
                    {this.props.addServerModal}
                    
                    <li onClick={this.handleNavClick(-2)} 
                        className={`nav-icon ${this.props.navClicked === -2 ? "nav-clicked" : null}`} 
                        id="compass-icon">
                        <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 5.999l-5.621 2.986c-.899-.104-1.806.191-2.474.859-.662.663-.95 1.561-.862 2.428l-3.043 5.728 5.724-3.042c.884.089 1.772-.205 2.432-.865.634-.634.969-1.524.859-2.473l2.985-5.621zm-5.97 7.22c-.689 0-1.25-.559-1.25-1.249-.001-.691.559-1.251 1.25-1.25.69 0 1.25.56 1.25 1.25-.001.689-.56 1.249-1.25 1.249z" />
                            </svg>
                            {/* <img src="https://img.icons8.com/ios-glyphs/30/26e07f/compass--v1.png" /> */}
                        </Link>
                    </li>
                </div>
                
                <Route path="/server/:serverId" component={ServerContainer}/>
                
                
                
                <div id="name-settings">
                    <div id="user-box-icon-container">
                        <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />                        
                    </div>
                        
                    <div id="user-box-info">
                        <div><p>{this.props.user.username}</p></div>
                        <div>{`#${this.props.user.id}`}</div>
                    </div>
                    {this.props.userSettingsModal}
                </div>
                
            </div>
        )
    }

}