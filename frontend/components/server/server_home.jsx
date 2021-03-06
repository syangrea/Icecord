import React from 'react';
import { connect } from 'react-redux';
import { setCurrentDMUserId } from '../../actions/filter_actions';
import { fetchServer } from '../../actions/server_action';
import { getDMChannels, getDMUsers, getPrivateServers } from '../../utils/server_home_util';
import DMListItem from './dm_list_items';
import MessagesBoxContainer from '../channel/chatbox/messages_box_container';
import {Route} from 'react-router-dom'
import { fetchUser } from '../../actions/user_actions';

class ServerHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            search: "",
            loaded: false
        }
        this.searchUpdate = this.searchUpdate.bind(this)
    }

    searchUpdate(e){
        this.setState({search: e.target.value})
    }

    componentDidMount(){
        
        this.setState({loaded: true})
        

    }

    componentWillUnmount(){
        this.props.setCurrentDMUserId(null);
    }

    findUserName(){
        let channelId = parseInt(this.props.location.pathname.split("/")[3])
        
        for(let serverId in this.props.channels){
            if(this.props.channels[serverId].id === channelId){
                
                return this.props.users[serverId][0].id === this.props.currentUser.id ?
                    this.props.users[serverId][1].username : this.props.users[serverId][0].username
            }
        }
        return null;
    }

    render(){
        // 
        
        return(
            <div id="home-container">
                <div id="home-header">

                    <div id="home-nav-header">

                        <div id="home-header-search">
                            <input type="text" onChange={this.searchUpdate}
                                value={this.state.search} placeholder="Search DMs"/>
                        </div>
                    </div>
                    <div id="home-body-header">
                        

                            {
                                (this.state.loaded && 
                                this.props.location.pathname.split("/").length === 4) ? 
                                <div>{this.findUserName()}</div> : <div>Home</div>
                            }

                            <div className="social-media-links">
                                <a href="https://github.com/syangrea" target="_blank"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/syangrea/" target="_blank"><i class="fab fa-linkedin"></i></a>
                                <a href="https://angel.co/u/stephen-yang-8" target="_blank"><i class="fab fa-angellist"></i></a>
                                <a href="https://syangrea.github.io/" target="_blank"><i class="fas fa-user"></i></a>
                                
                             
                            </div>
                        
                    </div>
                </div>
                
                <div id="home-body">
                    <div id="home-nav">
                        <div id="home-nav-body">
                            <div id="home-nav-body-header">
                                <h5>Direct Messages</h5>
                            </div>
                            <ul id="home-nav-body-dm-list">
                                {   
                                    
                                    (this.state.loaded) ? 
                                    this.props.privateServers.map((server,idx) => {
                                        // 
                                        return <DMListItem server={server} 
                                            key={idx}
                                            channel={this.props.channels[server.id]}
                                            users={this.props.users[server.id]}
                                            currentUser={this.props.currentUser}
                                            currentDMUser={this.props.currentDMUser}
                                            setCurrentDMUserId={this.props.setCurrentDMUserId}/>
                                    }) : null
                                }
                            </ul>
                        </div>
                    </div>
                    {
                        this.props.location.pathname.split("/").length === 3 ?
                            <div id="message-box-placeholder"></div> : 
                            <Route path="/server/home/:channelId" component={MessagesBoxContainer} />
                    }
                </div>
            </div>
        )
    }
}


const mSTP = (state, ownProps) => {
    return {
        privateServers: getPrivateServers(state),
        channels: getDMChannels(state),
        users: getDMUsers(state),
        currentUser: state.entities.users[state.session.id],
        currentDMUser: state.entities.users[state.ui.filters.currentDMUserId]
    }
}

const mDTP = dispatch => {
    return {
        fetchServer: serverId => {
            return dispatch(fetchServer(serverId))
        },
        setCurrentDMUserId: userId => {
            return dispatch(setCurrentDMUserId(userId))
        },
        fetchUser: userId => {
            return dispatch(fetchUser(userId))
        }
    }
}

export default connect(mSTP,mDTP)(ServerHome);