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
                <h5>LOG OUT</h5>
                <span>
                    Are you sure you want to logout?
                </span>

               
                <div className="modal-buttons">
                    
                    <button onClick={() => this.props.closeModal()}> Cancel </button>
                    <button onClick={this.handleLogout}>Log Out</button>
                </div>



            </div>
        )
    }

}