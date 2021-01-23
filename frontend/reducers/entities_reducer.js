import {combineReducers} from 'redux';
import UsersReducer from './entities/users_reducer';
import ServersReducer from './entities/servers_reducer';
import UserServersReducer from './entities/user_servers_reducer';

const entitiesReducer = combineReducers({
    users: UsersReducer,
    servers: ServersReducer,
    userServers: UserServersReducer
})

export default entitiesReducer