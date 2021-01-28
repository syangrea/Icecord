import React from 'react';

export default class LogoutModal extends React.Component {
    constructor(props) {
        super(props);

    
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e) {
        
        this.props.logout()
        
    }

    render() {
        return (
            <div id="delete-server">
                <div className="modal-header" id="logout-modal-header">

                    <h5>LOG OUT</h5>
                </div>
                <div className="modal-body" id="logout-modal-body">

                    <span>
                        Are you sure you want to logout?
                    </span>
                </div>
                

                <div className="modal-footer" id="logout-modal-footer">

                    <button className="modal-cancel" onClick={() => this.props.closeModal()}>
                        <div>

                            Cancel
                        </div>
                    </button>
                    <button className="modal-leave-delete-button" onClick={this.handleLogout}>
                        <div id="logout-button">

                            Log Out
                        </div>
                    </button>
                </div>




            </div>
        )
    }

}