const initialState = {
    userid: '',
    dailyHabits: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {...state, userid: action.payload}
        case 'ADD_HABITS':
            return {...state, dailyHabits: action.payload}
        default:
            return state;
    }
}

export default Reducer;
