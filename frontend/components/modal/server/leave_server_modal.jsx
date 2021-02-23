import React from 'react';

export default class LeaveServerModal extends React.Component{
    

    render(){
        // 
        return(
            <div id="leave-server">
                <div className="modal-header" id="leave-modal-header">

                    <h5>Leave  '{this.props.server.name}'</h5>
                </div>
                <div className="modal-body" id="leave-modal-body">

                    <span>
                        Are you sure you want to leave {this.props.server.name}?
                        You won't be able to rejoin this server unless you are
                        re-invited.
                    </span>
                </div>
                
                
                <div className="modal-footer" id="leave-modal-footer">

                    <button className="modal-cancel" onClick={() => this.props.closeModal()}> 
                        <div>

                            Cancel 
                        </div>
                    </button>
                    <button className="modal-leave-delete-button" onClick={() => this.props.leaveServer(this.props.userServer)}>
                        <div>

                            Leave Server
                        </div>
                    </button>
                </div>

                   
                
            </div>
        )
    }

}