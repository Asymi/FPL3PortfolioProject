const addHabits = habits => ({
  type: 'ADD_HABITS',
  payload: habits
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
