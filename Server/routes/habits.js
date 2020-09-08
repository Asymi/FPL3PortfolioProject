const express = require('express');
const db = require('../db/config');
const { indexForDay, show, createHabit, createHabitInstances, update, destroy } = require('../db/queries');

const router = express.Router();

router.get('/', (req, res) => {
    const date = new Date().toISOString().slice(0, 10);
    
    // This should be retrieved after the user logs in and saved - maybe a function to to this? I.e. while a user is logged in, all API calls are made with their userI
    const userID = 1;
   
    db.run(indexForDay, [userID, date])
    .then(resp => {
        const habits = resp.rows
        res.json({habits})
    })
    .catch(err => res.status(500).end())
});

//show one habit route
router.get('/:id', (req,res) => {
    db.run(show, [req.params.id])
        .then(resp => {
            const habit = resp.rows
            res.json({habit})
        })
        .catch(err=> res.status(50).end())
})

// Create new habit
router.post('/', (req, res) => {
    db.run(createHabit, [req.body.habit, req.body.frequency, req.body.startdate, req.body.enddate, req.body.userid])
    .then(resp => {
        const habit = resp.rows[0]
        popHabIns(resp.rows[0].habit_id, resp.rows[0].startdate, resp.rows[0].enddate, resp.rows[0].frequency)
        res.status(201).json(habit)
    })
    .catch(err => res.status(500).end())
})

// Helper function to populate habit_instance table for each
const popHabIns = (habitID, startDate, endDate, frequency) => {
    // Set interval to increment dates by
    const interval = setInterval(frequency)
    const datesArr = dateArray(startDate, endDate, interval)
    datesArr.map(date => db.run(createHabitInstances, [habitID, date]))
}

//Function to set interval between dates
const setInterval = (frequency) => {
    if (frequency.toLowerCase() === 'daily'){
        return 1;
    } else if (frequency.toLowerCase() === 'weekly'){
        return 7;
    } else if (frequency.toLowerCase() === 'fortnightly'){
        return 14;
    } else if (frequency.toLowerCase() === 'monthly'){
        return 30;
    }
}

// Functiont o generate an array of dates
const dateArray = function(start, end, interval) {
    const datesArr = [];
    const varDate = new Date(start);
    const endDate = new Date(end);
    while (varDate <= endDate) {
        datesArr.push(new Date(varDate));
        varDate.setDate(varDate.getDate() + interval);
    }
    datesArr.map(date => date.toISOString().slice(0, 10));
    return datesArr
}

//Update a habit as completed
router.put('/:id', (req,res) => {
    db.run(update, [req.params.id, req.body.date])
    .then(res.status(204))
    .catch(err => res.status(500).end())
})

//Delete habit route
router.delete('/:id', (req, res) => {
    db.run(destroy, [req.params.id])
        .then(res.status(204))
        .catch(err => res.status(500).end())
})


module.exports = router;