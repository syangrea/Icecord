import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import ServerContainer from './server_container';
import ServerListContainer from './server_list/server_list_container';
import ServerHome from './server_home';
import ServerExplore from './server_explore';


export default class ServerLanding extends React.Component{

    constructor(props){
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        let serversLoaded = 0;
        if(this.props.privateServers.length === 0) {
            this.setState({loaded: true})
        }
        this.props.privateServers.forEach(server => {
            this.props.fetchServer(server.id).then(() => {
                serversLoaded += 1;
                
                if(serversLoaded === this.props.privateServers.length){
                    // 
                    this.setState({loaded: true})
                    
                }
            });
        })
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
        
        let leftHomeServerBarClass = "left-server-bar";
        if(this.props.navClicked === -1){
          leftHomeServerBarClass = leftHomeServerBarClass + " server-clicked";
        }else if(this.state.homeHover){
            
         leftHomeServerBarClass = leftHomeServerBarClass + " server-hovered";
        }
        let homeHoverDescription = (
            <div className={this.state.homeHover ? "server-hover-description hovered" : "server-hover-description" }>
                <div>Home</div>
             </div>
        )
        let leftHomeServerBar = (
            <div className={leftHomeServerBarClass}></div>
        )
        let leftExploreServerBarClass = "left-server-bar";
        if(this.props.navClicked === -2){
          leftExploreServerBarClass = leftExploreServerBarClass + " server-clicked";
        }else if(this.state.exploreHover){
            
         leftExploreServerBarClass = leftExploreServerBarClass + " server-hovered";
        }
        let exploreHoverDescription = (
            <div className={this.state.exploreHover ? "server-hover-description hovered" : "server-hover-description" }>
                <div>Explore Servers</div>
             </div>
        )
        let leftExploreServerBar = (
            <div className={leftExploreServerBarClass}></div>
        )
        let leftAddServerBarClass = "left-server-bar";
        if(this.state.addServerHover){
            
         leftAddServerBarClass = leftAddServerBarClass + " server-hovered";
        }
        let addServerHoverDescription = (
            <div className={this.state.addServerHover ? "server-hover-description hovered" : "server-hover-description" }>
                <div>Add Servers</div>
             </div>
        )
        let leftAddServerBar = (
            <div className={leftAddServerBarClass}></div>
        )
        // 
        return (
            <div id="server-landing">
                <div id="server-nav-bar">
                    <div className="server-list-item-container"
                        onMouseEnter={e => this.setState({homeHover: true})}
                        onMouseLeave={e => this.setState({homeHover: false})}>

                        {homeHoverDescription}
                        {leftHomeServerBar}
                        <li onClick={this.handleNavClick(-1)} id="server-home-icon" className={`${this.props.navClicked === -1 ? "nav-clicked" : null}`}>
                            <div>

                            <Link to="/server/home">
                                <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" /> 
                            </Link>
                            </div>
                        </li>
                    </div>
                    <div id="nav-divider-line"></div>
                    <ServerListContainer />
                    <div className="server-list-item-container"
                        onMouseEnter={e => this.setState({addServerHover: true})}
                        onMouseLeave={e => this.setState({addServerHover: false})}>
                        {addServerHoverDescription}
                        {leftAddServerBar}
                        {this.props.addServerModal}
                    </div>
                    <div className="server-list-item-container" 
                        onMouseEnter={e => this.setState({exploreHover: true})}
                        onMouseLeave={e => this.setState({exploreHover: false})}>
                        {exploreHoverDescription}
                        {leftExploreServerBar}
                        <li onClick={this.handleNavClick(-2)} 
                            className={`nav-icon ${this.props.navClicked === -2 ? "nav-clicked" : null}`} 
                            id="compass-icon">
                            <Link to="/server/explore">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 5.999l-5.621 2.986c-.899-.104-1.806.191-2.474.859-.662.663-.95 1.561-.862 2.428l-3.043 5.728 5.724-3.042c.884.089 1.772-.205 2.432-.865.634-.634.969-1.524.859-2.473l2.985-5.621zm-5.97 7.22c-.689 0-1.25-.559-1.25-1.249-.001-.691.559-1.251 1.25-1.25.69 0 1.25.56 1.25 1.25-.001.689-.56 1.249-1.25 1.249z" />
                                </svg>
                                {/* <img src="https://img.icons8.com/ios-glyphs/30/26e07f/compass--v1.png" /> */}
                            </Link>
                        </li>
                    </div>
                </div>
               
                {
                   
                    this.state.loaded ? 

                    <Switch>
                        
                        <Route path="/server/home" component={ServerHome}/>
                        <Route path="/server/explore" component={ServerExplore} />
                        <Route path="/server/:serverId" component={ServerContainer} />
                        
                    </Switch> : null
                }
                
                
                
                <div id="name-settings">
                    <div id="user-box-icon-container">
                        {
                            this.props.user.photoUrl ? 
                            <img className="profile-icon" src={this.props.user.photoUrl} />
                            :
                            <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
                        }
                    </div>
                        
                    <div id="user-box-info">
                        <div><p>{this.props.user.username}</p></div>
                        <div>{`#${this.props.user ? this.props.user.id : null}`}</div>
                    </div>
                    {this.props.userSettingsModal}
                </div>
                
            </div>
        )
    }

}