import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_action';

class AccountSettings extends React.Component{

    constructor(props){
        super(props);
    }

    handleEdit(attr){
        return e => {
            switch(attr){
                case "username":
                    this.props.openModal("editUsername")
                    break;
                case "email":
                    this.props.openModal("editEmail")
                    break;
            }
        }
    }


    render(){
        return (
            <div id="account-settings-container">
                <div id="account-settings-header">
                    MY ACCOUNT
                </div>
                <div id="account-settings-edit-container">
                    <div id="account-settings-edit-header">

                    </div>
                    <div id="account-settings-edit-body">
                        <div id="edit-username">
                            <div className="current-user-property">
                                <span>USERNAME</span>
                                <div>{this.props.currentUser.username}</div>
                            </div>
                            <button onClick={this.handleEdit("username")}>Edit</button>
                        </div>
                        <div id="edit-email">
                            <div className="current-user-property">
                                <span>EMAIL</span>
                                <div>{this.props.currentUser.email}</div>
                            </div>
                            <button onClick={this.handleEdit("email")}>Edit</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }


}

const mSTP = (state,ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => {
    return {
        openModal: modalName => {
            return dispatch(openModal(modalName))
        }
    }

}

export default connect(mSTP,mDTP)(AccountSettings);

