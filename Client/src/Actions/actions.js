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

export const getHabits = userId => {
  return async dispatch => {
    try {
      const resp = await fetch(`http://localhost:3000/habits/${userId}/dashboard`)
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
// getHabits(userId) {
//   fetch(`http://localhost:3000/habits/${userId}/dashboard`)
//   .then(resp => resp.json())
//   // .then(habits => console.log(habits.habits))
//   .then(data => {
//     console.log(Array.isArray(data.habits))
//     return (data.habits.map((item, index) => (
//       <div key={index}>
//         <p>{item}</p>
//       </div>
//     )))
//   })
