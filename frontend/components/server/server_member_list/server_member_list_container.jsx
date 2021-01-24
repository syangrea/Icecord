import { connect } from 'react-redux';
import ServerMemberList from './server_member_list';
import {getMembers} from '../../../utils/server_util';

const mSTP = (state,ownProps) => {
    return {
        users: getMembers(state, ownProps.match.params.serverId)
    }
}

const mDTP = dispatch => {
    return {

    }
}


export default connect(mSTP, mDTP)(ServerMemberList);
