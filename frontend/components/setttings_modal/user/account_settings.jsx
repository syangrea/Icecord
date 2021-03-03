import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_action';
import { patchUser, patchUserPhoto } from '../../../actions/user_actions';

class AccountSettings extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            photoFile: null, 
            photoUrl: "",
            
        }
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleChangePhoto = this.handleChangePhoto.bind(this);
        this.handleSubmitPhoto = this.handleSubmitPhoto.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleFileChange(e){
        e.preventDefault();
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
          this.setState({ photoUrl: reader.result, photoFile: file});

        if (file) {
          reader.readAsDataURL(file);
        } else if(!this.state.photoFile){
          this.setState({ photoUrl: "", photoFile: null});
        }
    }

    handleChangePhoto(e){
        this.fileInput.click();
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

    handleSubmitPhoto(e){
        e.preventDefault();
        const formData = new FormData();
        
        if (this.state.photoFile) {
      
          formData.append('user[photo]', this.state.photoFile);
          this.props.patchUserPhoto(formData,this.props.currentUser.id)
            .then(() => {
                this.setState({
                    photoFile: null, 
                    photoUrl: ""
                })
            })
        }


    }

    handleReset(e){
        this.fileInput.value = "";
        this.setState({
            photoFile: null, 
            photoUrl: ""
        })
    }


    render(){
        let avatarComponent;
        if(this.state.photoUrl.length > 0){
            avatarComponent = <img onClick={this.handleChangePhoto} className="profile-icon" src={this.state.photoUrl} />
        }else if(this.props.currentUser.photoUrl){
            avatarComponent = <img onClick={this.handleChangePhoto} className="profile-icon" src={this.props.currentUser.photoUrl} />
        }else{
            avatarComponent = <img onClick={this.handleChangePhoto} className="default-icon" src="https://img.icons8.com/dusk/64/000000/discord-logo.png" />

        }
        
        return (
            <div id="account-settings-container">
                <div id="account-settings-header">
                    MY ACCOUNT
                </div>
                <div id="account-settings-edit-container">
                    <div id="account-settings-edit-header">
                        {avatarComponent}
                        <h5>{this.props.currentUser.username}</h5>
                        <button onClick={this.handleChangePhoto}>Upload Avatar</button>
                        <input type="file" style={{display: 'none'}}
                            ref={comp => this.fileInput = comp}
                            onChange={this.handleFileChange}
                            accept="image/*"/>
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
                {
                    this.state.photoFile ? 
                    <div id="save-changes">
                        <div id="save-changes-text">
                            Careful --  you have unsaved changes!
                        </div>
                        <div id="save-changes-buttons">
                            <button onClick={this.handleReset}>Reset</button>
                            <button onClick={this.handleSubmitPhoto}>Save Changes</button>
                        </div>

                    </div>
                    : null
                }
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
        },
        patchUserPhoto: (userFormData,currentUserId) => {
            return dispatch(patchUserPhoto(userFormData, currentUserId))
        }
    }

}

export default connect(mSTP,mDTP)(AccountSettings);

