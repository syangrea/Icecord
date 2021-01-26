
import { connect } from 'react-redux';
import { closeModal } from '../../../actions/modal_action';
import InviteModal from './invite_modal';


const mSTP = (state, ownProps) => {
    return {
        
        server: state.entities.servers[state.ui.filters.serverClicked]
    }
}

const mDTP = dispatch => {
    return {
        
        closeModal: () => {
            return dispatch(closeModal());
        }
    }
}


export default connect(mSTP, mDTP)(InviteModal)
