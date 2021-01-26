import SERVER_CLICK from '../../actions/filter_actions';

const filtersReducer = (state = {serverClicked: null}, action) => {
    Object.freeze(state);
    switch(action.type){
        case SERVER_CLICK:
            return Object.assign({}, state, {serverClicked: action.serverId})
        default: 
            return state;
    }
}

export default filtersReducer;

