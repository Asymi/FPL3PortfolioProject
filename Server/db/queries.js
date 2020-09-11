// Select habits relevant to a certain user that are due to be ticked off on today's date, $1 will be the user id and $2 will be today's date
const indexForDay = `SELECT * FROM habit_instance JOIN habit_overview ON habit_instance.habit_id = habit_overview.habit_id WHERE habit_overview.userid = $1 AND habit_instance.date = TO_DATE($2,'YYYY-MM-DD')`;

// Select a single habit from the table of habits
const show = `SELECT * FROM habit_overview WHERE habit_id = $1 AND userid = $2`;
// Change to showsingle, and make showall

// Show weekly/ monthly
const showByFrequency = `SELECT * FROM habit_overview WHERE frequency = $1 AND userid = $2`;

// const show = `SELECT * FROM habit_overview WHERE frequency = $1`;
// Create a habit for a user in the habit_overview table
const createHabit = `INSERT INTO habit_overview (habit, frequency, startdate, enddate, userid) VALUES ($1, $2, TO_DATE($3,'YYYY-MM-DD'), TO_DATE($4,'YYYY-MM-DD'), $5) RETURNING *`;
// Create rows in habit instance table to allow for check-ins
const createHabitInstances = `INSERT INTO habit_instance (habit_id, date, status) VALUES ($1, $2, false)`

// Change status from false to true for a chosen habit_id if the date of the row is equal to the date specified by the user (which will be today's)
// Habit id's are unique, even when deleted, so it is not necessary to specify a user's id in addition to a habit id
const update = `UPDATE habit_instance SET status = NOT status WHERE habit_id = $1 AND habit_instance.date = TO_DATE($2,'YYYY-MM-DD') RETURNING *;`;

const deleteHabitInstance = `DELETE FROM habit_instance WHERE habit_id = $1 RETURNING habit_id`;
const deleteHabitOverview = `DELETE FROM habit_overview WHERE habit_id = $1 RETURNING habit_id`;

const getUserByEmail = `SELECT * FROM users WHERE username = $1`;
const insertUser = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *`;

// const streak = ;
const getStreakByHabitId = `SELECT * FROM habit_instance WHERE habit_instance.habit_id = $1 AND habit_instance.date <= TO_DATE($2,'YYYY-MM-DD') ORDER BY date ASC`;

module.exports = {indexForDay, show, showByFrequency, createHabit, createHabitInstances, update, deleteHabitInstance, deleteHabitOverview, getUserByEmail, insertUser, getStreakByHabitId};
