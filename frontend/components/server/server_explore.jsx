import React from 'react';
import { connect } from 'react-redux';
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
       this.props.joinServer(link, this.props.currentUserId)
            .then((res) => {
                this.props.history.push(`/server/${serverId}/channel/${Object.values(res.payload.channels)[0].id}`)
            })
        
    }

    render(){
        return(
            <div id="explore-server-page">
                <div id="explore-server-nav">
                    <div>Discover</div>

                </div>

                <div id="explore-server-body">
                    <div id="explore-server-body-header">Explore our servers. All servers available for demo purposes only!</div>
                    <div id="explore-server-body-body">
                        <div id="explore-server-body-body-header">Featured Servers</div>
                        <div id="explore-server-body-body-list">
                            <ul>
                                {
                                    this.props.servers.map((server,idx) => {
                                        <li key={idx}>
                                            <div className="explore-server-list-item">
                                                <img src={server.photoUrl} alt=""/>
                                                <div>{server.name}</div>
                                                <button onClick={this.handleJoin(server.link, server.id)}>Join Server</button>
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
        }

    }
}

export default connect(mSTP,mDTP)(ServerExplore)