import React from 'react';

export default class LeaveServerModal extends React.Component{
    

    render(){
        // debugger
        return(
            <div id="leave-server">
                <h5>Leave '{this.props.server.name}'</h5>
                <span>
                    Are you sure you want to leave {this.props.server.name}? 
                    You won't be able to rejoin this server unless you are
                    re-invited.
                </span>
                
                <button onClick={() => this.props.closeModal()}> Cancel </button>
                <button onClick={() => this.props.leaveServer(this.props.userServer)}>Leave Server</button>

                   
                
            </div>
        )
    }

}