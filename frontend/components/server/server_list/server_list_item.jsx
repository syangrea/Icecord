import React from 'react'
import { withRouter, Link, Route } from 'react-router-dom';

class ServerListItem extends React.Component{

    constructor(props){
        super(props);
        this.handleServerClick = this.handleServerClick.bind(this);
        
    }
    
    handleServerClick(e){
        return this.props.fetchServer(this.props.server.id)
            .then(() => this.props.history.push(`/server/${this.props.server.id}`))
    }


    render(){
        
        return (
            <li>

                <div class="server-list-item">
                    <h5 onClick={this.handleServerClick}>this.props.server.name</h5>
                    <div className="server-right-click-options">
                        <Link to="/server/edit" >Update Server</Link>
                        <Link to="/server/delete">Delete Server</Link>
                        <Link to="/server/leave">Leave Server</Link>
                        <Route path="/server/edit" render={props => {
                            return <UpdateServerFormModal {...props} 
                                server={this.props.server}
                                updateServer={this.props.updateServer}
                            />
                        } }/>

                        <Route path="/server/delete" render={props => {
                            return <DeleteServerModal {...props} 
                                server={this.props.server.id}
                                deleteServer={this.props.deleteServer}
                            />
                        } }/>

                        <Route path="/server/leave" render={props => {
                            return <LeaveServerModal {...props} 
                                userServerId={this.props.userServerId}
                                leaveServer={this.props.leaveServer}
                            />
                        } }/>
                        

                    </div>
                </div>
            </li>
        )
    }

}

export default withRouter(ServerListItem);