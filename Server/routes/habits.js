const express = require('express');
const db = require('../db/config');
const { index, show, create, update, destroy } = require('../db/queries');

const router = express.Router();

router.get('/users/:id', (req, res) => {
    const date = new Date().toISOString().slice(0, 10);
    db.run(index, [req.params.id, date])
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
        .catch(err=> res.status(500).end())
})

// Create new habit
router.post('/', (req, res) => {
    db.run(create, [req.body.habitid, req.body.habit, req.body.frequency, req.body.start_date, req.body.end_date, req.body.userid])
    .then(resp => {
        const habit = resp.rows[0]
        res.status(201).json(habit)
    })
    .catch(err => res.status(500).end())
})

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