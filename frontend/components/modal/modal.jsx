import React from 'react';
import { connect } from 'react-redux';
import {closeModal} from '../../actions/modal_action';
import AddServerModalContainer from './server/add_server_modal_container';
import LeaveServerModalContainer from './server/leave_server_modal_container';
import InviteModalContainer from './server/invite_modal_container';
import CreateServerModalContainer from './server/create_server_modal_container';
import JoinServerModalContainer from './server/join_server_modal_container';
import DeleteServerModalContainer from './server/delete_server_modal_container';
import LogoutModalContainer from './user/logout_modal_container'
import CreateChannel from './channel/create_channel';
import DeleteChannel from './channel/delete_channel';
import EditUsernameModal from './user/edit_username_modal';
import EditEmailModal from './user/edit_email_modal';

function Modal({modal, closeModal}){
    // 
    if(!modal){
        // 
        return null;
    }

    let component;
    switch(modal){
        case 'leaveServer':
            component = <LeaveServerModalContainer />;
            break;
        case 'invitePeople':
            component = <InviteModalContainer />;
            break;
        case 'addServer':
            // 
            component = <AddServerModalContainer />;
            break;
        case 'createServer':
            component = <CreateServerModalContainer />;
            break;
        case 'joinServer':
            component = <JoinServerModalContainer />;
            break;
        case 'deleteServer':
            component = <DeleteServerModalContainer />;
            break;
        case 'editUsername':
            component = <EditUsernameModal />;
            break;
        case 'editEmail':
            component = <EditEmailModal />;
            break;
        case 'logout':
            component = <LogoutModalContainer />;
            break;
        case 'createChannel':
            component = <CreateChannel/>;
            break;
        case 'deleteChannel':
            component = <DeleteChannel/>;
            break;
        default:
            return null;
    }
    // 

    return (
        <div className="modal-background" onClick={closeModal} onClick={e => e.stopPropagation()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}


const mSTP = state => {
    // 
    return {
        modal: state.ui.modal
    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(mSTP, mDTP)(Modal);