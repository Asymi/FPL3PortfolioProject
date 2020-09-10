const express = require('express');
const db = require('../db/config');
const { indexForDay, show, showByFrequency, createHabit, createHabitInstances, update, deleteHabitOverview, deleteHabitInstance, getStreakByHabitId } = require('../db/queries');
const { setInterval, dateArray } = require('./helpers')

const router = express.Router();

router.get('/:userid/dashboard', (req, res) => {
    const date = new Date().toISOString().slice(0, 10);
   
    db.run(indexForDay, [req.params.userid, date])
    .then(resp => {
        const habits = resp.rows
        res.json({habits})
    })
    .catch(err => res.status(500).end())
});


//show one habit route
router.get('/:userid/show/:id', (req,res) => {
    db.run(show, [req.params.id, req.params.userid])
        .then(resp => {
            const habit = resp.rows
            res.json({habit})
        })
        .catch(err=> res.status(500).end())
})

router.get('/test', (req,res) => {
    res.json({ message: "Response" })
})

//show habit by frequency route
router.get('/:userid/daily', (req,res) => {
    db.run(showByFrequency, ['Daily', req.params.userid])
        .then(resp => {
            const habit = resp.rows[0]
            res.json({habit})
        })
        .catch(err => res.status(500).end())
})

//show habit by frequency route
router.get('/:userid/weekly', (req,res) => {
    db.run(showByFrequency, ['Weekly', req.params.userid])
        .then(resp => {
            const habit = resp.rows[0]
            res.json({habit})
        })
        .catch(err => res.status(500).end())
})

//show habit by frequency route
router.get('/:userid/monthly', (req,res) => {
    db.run(showByFrequency, ['Monthly', req.params.userid])
        .then(resp => {
            const habit = resp.rows[0]
            res.json({habit})
        })
        .catch(err => res.status(500).end())
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

//Update a habit as completed
router.put('/:userid/:id', (req,res) => {
    const date = new Date().toISOString().slice(0, 10);

    db.run(update, [req.params.id, date])
    .then(resp => {
        res.send(resp)
        res.status(204).json({ message: "Habit updated" })
    })
    .catch(err => res.status(500).end())
})

//Delete habit route
router.delete('/:userid/:id', (req, res) => {
    db.run(deleteHabitInstance, [parseInt(req.params.id)])
    db.run(deleteHabitOverview, [parseInt(req.params.id)])
    .then(resp => {
        res.send(resp.rows[0])
        res.status(204).json({ message: "Habit deleted"})
    })
    .catch(err => res.status(500).end())
})

// Show longest streak 
router.get('/streak/:id', (req, res) => {
    db.run(getStreakByHabitId, [parseInt(req.params.id)])
    .then(resp => {
        // Ordered habit instances
        const ordHabIns = resp.rows;
        console.log(ordHabIns);
        res.json({ordHabIns}).status(201)
    })
    .catch(err => res.status(500).end())
})
//SELECT * FROM habit_instance WHERE habit_instance.habit_id = $1 ORDER BY date ASC



module.exports = router;