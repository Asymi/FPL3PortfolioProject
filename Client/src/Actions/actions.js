const addHabits = habits => ({
  type: 'ADD_HABITS',
  payload: habits
})

const updateHabit = update => ({
  type: 'UPDATE_STATUS',
  payload: update
})

const deleteHabit = deleted => ({
  type: 'DELETE_HABIT',
  payload: deleted
})

const addStreaks = streaks => ({
  type: 'ADD_STREAKS',
  payload: streaks
})

export const getHabits = info => {
  return async dispatch => {
    try {
      const options = {
        method: "GET",
        headers : {
          authorization: info.accessToken
        }
      }
      const resp = await fetch(`http://localhost:3000/habits/${info.user_id}/dashboard`, options)
      const habits = await resp.json()
      dispatch(addHabits(habits))
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

export const updateStatus = habitInfo => {
  return async dispatch => {
    try {
      const options = {
        method: "PUT"
      }
      const resp = await fetch(`http://localhost:3000/habits/${habitInfo.userid}/${habitInfo.habit_id}`, options)
      const update = await resp.json()
      dispatch(updateHabit(update.rows))
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

export const destroyHabit = habitInfo => {
  return async dispatch => {
    try {
      const options = {
        method: "DELETE"
      }
      const resp = await fetch(`http://localhost:3000/habits/${habitInfo.userid}/${habitInfo.habit_id}}`, options)
      const deleted = await resp.json()
      dispatch(deleteHabit(deleted))
    } catch (err) {
      throw new Error(err.message)
    }
  }
}

export const getStreaks = habitId => {
  return async dispatch => {
    try {
      const resp = await fetch(`http://localhost:3000/habits/streak/${habitId}`)
      const streak = await resp.json()
      const streaks = {
        habit_id: habitId,
        current: currentStreak(streak),
        longest: longestStreak(streak)
      }
      dispatch(addStreaks(streaks))
      return streaks
    } catch (err) {
      throw new Error(err)
    }
  }
}

const currentStreak = (obj) => {
  let temp;
  let currentStreak = 0;
  const arr = obj.ordHabIns
  
  for(let i = 0; i < arr.length; i++){
      temp = arr[i].status;

      if (temp !== undefined && temp ){
          currentStreak++;
      } else {
          currentStreak = 0;
      }
  }
  return currentStreak
}

const longestStreak = (obj) => {
  let temp;
  let streak;
  const arr = obj.ordHabIns;
 
  for(let i = 0; i < arr.length; i++){
      if (temp !== undefined && temp === arr[i].status && arr[i].status === true){
          streak++;
      } else {
          streak = 1;
      }
      temp = arr[i].status;
      
  }
  return streak
}
