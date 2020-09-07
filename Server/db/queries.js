// Select habits relevant to a certain user that are due to be ticked off on today's date, $1 will be the user id and $2 will be today's date
const index = `SELECT * FROM habit_instance JOIN habit_overview ON habit_instance.habit_id = habit_overview.habit_id WHERE habit_overview.userid = $1 AND habit_instance.date = TO_DATE($2,'YYYY-MM-DD')`;
const show = `SELECT * FROM habit_overview WHERE habit_id = $1`;
const create = `INSERT INTO habit_overview (habit_id, habit, frequency, startdate, enddate, userid) VALUES ($1, $2, $3, TO_DATE($4,'YYYY-MM-DD'), TO_DATE($5,'YYYY-MM-DD'), $6) RETURNING *`;
const update = `UPDATE habit_instance SET status = true WHERE habit_id = $1 AND habit_instance.date = TO_DATE($2,'YYYY-MM-DD') RETURNING *`;
const destroy = `DELETE FROM habit_overview WHERE habit_id = $1; DELETE FROM habit_instance WHERE habit_id = $1`;

module.exports = {index, show, create, update, destroy};