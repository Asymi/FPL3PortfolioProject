// Select habits relevant to a certain user that are due to be ticked off on today's date, $1 will be the user id and $2 will be today's date
const indexForDay = `SELECT * FROM habit_instance JOIN habit_overview ON habit_instance.habit_id = habit_overview.habit_id WHERE habit_overview.userid = $1 AND habit_instance.date = TO_DATE($2,'YYYY-MM-DD')`;

// Select a single habit from the table of habits
const show = `SELECT * FROM habit_overview WHERE habit_id = $1`;

// Create a habit for a user in the habit_overview table
const createHabit = `INSERT INTO habit_overview (habit, frequency, startdate, enddate, userid) VALUES ($1, $2, TO_DATE($3,'YYYY-MM-DD'), TO_DATE($4,'YYYY-MM-DD'), $5) RETURNING *`;
// Create rows in habit instance table to allow for check-ins
const createHabitInstances = `INSERT INTO habit_instance (habit_id, date, status) VALUES ($1, $2, false)`

const update = `UPDATE habit_instance SET status = true WHERE habit_id = $1 AND habit_instance.date = TO_DATE($2,'YYYY-MM-DD') RETURNING *`;
const destroy = `DELETE FROM habit_overview WHERE habit_id = $1; DELETE FROM habit_instance WHERE habit_id = $1`;

const getUserByEmail = `SELECT * FROM users WHERE username = $1`;
const insertUser = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING userid`;

module.exports = {indexForDay, show, createHabit, createHabitInstances, update, destroy, getUserByEmail, insertUser};
