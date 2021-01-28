import { connect } from "react-redux"
import { updateServer } from "../../../actions/server_action"
import OverviewSettings from "./overview_settings"


const mSTP = (state,ownProps) => {
    return {
        server: state.entities.servers[state.ui.filters.serverClicked],
    }
}

const mDTP = dispatch => {
    return {
        updateServer: server => {
            // debugger
            return dispatch(updateServer(server));
        }
    }
}

export default connect(mSTP,mDTP)(OverviewSettings)