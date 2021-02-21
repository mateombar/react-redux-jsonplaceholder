const INITIAL_STATE = {
    users: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'get_users':
            return {...state, users: action.payload}
            break;
    
        default: return state;
            break;
    }
}