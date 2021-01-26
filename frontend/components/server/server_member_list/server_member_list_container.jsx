import { connect } from 'react-redux';
import ServerMemberList from './server_member_list';
import {getMembers} from '../../../utils/server_util';
import { withRouter } from 'react-router-dom';

const mSTP = (state,ownProps) => {
    return {
        users: getMembers(state, parseInt(ownProps.match.params.serverId))
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default withRouter(connect(mSTP, mDTP)(ServerMemberList));
