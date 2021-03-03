import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_action';
import { patchUser } from '../../../actions/user_actions';

class EditEmailModal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: this.props.currentUser.email,
            password: ""
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field){
        return e => {

            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.patchUser(Object.assign({}, this.props.currentUser, this.state))
            .then(() => {
                this.props.closeModal();
            })
    }

    render(){
        return (
            <div id="edit-email-container" className="edit-user">
                <div id="edit-email-header" className="edit-user-header">
                    <h5>Enter an email address</h5>
                    <span>Enter an email address and your existing password</span>
                    <button className="modal-exit-button" onClick={() => this.props.closeModal()}>
                        <img src="https://img.icons8.com/officel/16/000000/multiply.png" />
                    </button>
                </div>
                <div id="edit-email-body" className="edit-user-body">
                    <div className="edit-user-input">
                        <label htmlFor="user-email">
                            EMAIL
                        </label>
                        <input type="text" id="user-email" value={this.state.email} onChange={this.update("email")}/>
                    </div>
                    <div className="edit-user-input">
                        <label htmlFor="user-password">
                            CURRENT PASSWORD
                        </label>
                        <input type="password" id="user-password" value={this.state.password} onChange={this.update("password")}/>
                    </div>
                </div>
                <div id="edit-username-footer" className="edit-user-footer">
                    <button id="cancel-modal-button" onClick={() => this.props.closeModal()}>Cancel</button>
                    <button id="done-modal-button" onClick={this.handleSubmit}>Done</button>
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
        closeModal: () => {
            return dispatch(closeModal())
        },
        patchUser: user => {
            return dispatch(patchUser(user))
        }

    }
}

export default connect(mSTP,mDTP)(EditEmailModal);