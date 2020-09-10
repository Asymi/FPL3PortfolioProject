const initialState = {
    userid: '',
    dailyHabits: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {...state, userid: action.payload}
        case 'ADD_HABITS':
            return {...state, dailyHabits: action.payload.habits}
        case 'UPDATE_STATUS': {
            return Object.assign({}, state, {
                dailyHabits : state.dailyHabits.map(habit => {
                    if (habit.habit_id !== action.payload[0].habit_id) {
                        return habit
                    }
                    return Object.assign({}, habit, {
                        status: !habit.status
                    })
                })
            })
        }
        case 'DELETE_HABIT': 
            return {...state, dailyHabits: state.dailyHabits.filter((habit, index) => habit.habit_id !== action.payload.habit_id)}
        default:
            return state;
    }
}

export default Reducer;
