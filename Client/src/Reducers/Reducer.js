const initialState = {
    userid: '',
    dailyHabits: []
}

const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REGISTER_USER':
            return {...state, userid: action.payload}
        case 'GET_HABITS':
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
        case 'ADD_STREAKS': {
            return Object.assign({}, state, {
                dailyHabits : state.dailyHabits.map(habit => {
                    if (habit.habit_id !== action.payload.habit_id) {
                        return habit
                    }
                    return Object.assign({}, habit, {
                        current: action.payload.current,
                        longest: action.payload.longest
                    })
                })
            })
        }
        case 'DELETE_HABIT':
            return {...state, dailyHabits: state.dailyHabits.filter((habit, index) => habit.habit_id !== action.payload.habit_id)}
        case 'LOG_OUT':
            return {...state, userid: '', dailyHabits: []}
        case 'ADD_HABIT':
            return {...state, dailyHabits: [state.dailyHabits, action.payload]}
        default:
            return state;
    }
}

export default Reducer;
