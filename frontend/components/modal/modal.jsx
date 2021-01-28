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

function Modal({modal, closeModal}){
    // debugger
    if(!modal){
        // debugger
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
            // debugger
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
        case 'logout':
            component = <LogoutModalContainer />;
            break;
        default:
            return null;
    }
    // debugger

    return (
        <div className="modal-background" onClick={closeModal} onClick={e => e.stopPropagation()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}


const mSTP = state => {
    // debugger
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