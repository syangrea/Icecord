import { connect } from 'react-redux';
import { closeModal, openModal } from '../../../actions/modal_action';
import AddServerModal from './add_server_modal';
import React from 'react'


const mSTP = () => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createServerModal: (
            <button onClick={() => dispatch(openModal('createServer'))}>
                <div>
                    <img id="create-server-icon" src="https://discord.com/assets/79516499036b21acd5f56ccba0635c38.svg" alt=""/>
                    <span>Create My Own</span>
                    <img className="continue-arrowhead" src="https://discord.com/assets/69a0ea5dbf79a129c81a0cb171b60b7a.svg" alt=""/>
                </div>
                
            </button>
        ),
        joinServerModal: (
            <button onClick={() => dispatch(openModal('joinServer'))}>
                <div>Join a server</div>
            </button>
        )
    }
}

export default connect(mSTP, mDTP)(AddServerModal);