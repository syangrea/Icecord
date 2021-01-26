import { connect } from 'react-redux';
import { closeModal, openModal } from '../../../actions/modal_action';
import AddServerModal from './add_server_modal';


const mSTP = () => {
    return {

    }
}

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        createServerModal: (
            <button onClick={() => dispatch(openModal('createServer'))}>
                Create My Own
            </button>
        ),
        joinServerModal: (
            <button onClick={() => dispatch(openModal('joinServer'))}>
                Join a server
            </button>
        )
    }
}

export default connect(mSTP, mDTP)(AddServerModal);