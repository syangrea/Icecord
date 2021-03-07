import React from 'react';
import { connect } from 'react-redux';
import { landingNavClick } from '../../actions/filter_actions';
import { fetchAllServers, joinServer } from '../../actions/server_action';
import {serversNotAMember} from '../../utils/explore_server_util';

class ServerExplore extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchAllServers();
    }

    handleJoin(link, serverId){
        
        //if user is already in server switch to that server else join
       return e => {
           this.props.joinServer(link, this.props.currentUserId)
            .then((res) => {
                this.props.history.push(`/server/${serverId}/channel/${Object.values(res.payload.channels)[0].id}`)
                this.props.landingNavClick(serverId);
            })
       }
    }


    render(){
        
        return(
            <div id="explore-server-page">
                <div id="explore-server-nav">
                    <div>Discover</div>

                </div>

                <div id="explore-server-body">
                    <div id="explore-server-body-header">
                        <h3>
                            Explore our servers.
                        </h3>
                        <div>
                            All servers available for demo purposes only!
                        </div>
                    </div>
                    <div id="explore-server-body-body">
                        <div id="explore-server-body-body-header">Featured Servers</div>
                        <div id="explore-server-body-body-list">
                            <ul>
                                {
                                    this.props.servers.map((server,idx) => {
                                        return <li key={idx}>
                                            <div className="explore-server-list-item" onClick={this.handleJoin(server.link, server.id)}>
                                                {
                                                    server.photoUrl ? 
                                                    <img src={server.photoUrl} alt=""/>
                                                    :
                                                    <div className="explore-server-list-item-img-default">
                                                        <img className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />
                                                    </div>
                                                }
                                                <div className="explore-server-list-item-name">{server.name}</div>
                                                
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        )
    }


}

const mSTP  = (state,ownProps) => {
    
    return {
        servers: serversNotAMember(state),
        currentUserId: state.session.id
    }
    
}

const mDTP = dispatch => {
    return {
        fetchAllServers: () => {
            return dispatch(fetchAllServers())
        },
        joinServer: (link, id) => {
            return dispatch(joinServer(link,id))
        },
        landingNavClick: id => {
            return dispatch(landingNavClick(id));
        }

    }
}

export default connect(mSTP,mDTP)(ServerExplore)