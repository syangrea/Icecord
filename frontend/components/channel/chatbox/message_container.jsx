import { connect } from "react-redux"
import Message from "./message"


const mSTP = (state, ownProps) => {
    
    return {
        user: state.entities.users[ownProps.message.userId]
    }
}

const mDTP = dispatch => {
    return {

    }
}

export default connect(mSTP, mDTP)(Message)