const initialState = {
    userid: ''
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {...state, userid: action.payload}
        default:
            return state;
    }
}

export default Reducer;