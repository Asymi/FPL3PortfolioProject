const express = require('express');
const db = require('../db/config');
const bcrypt = require('bcrypt');

const { getUserByEmail, insertUser } = require('../db/queries');
const { validateUser } = require('./helpers');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: "🔐"
  })
});

router.post('/signup', (req, res, next) => {
  if(validateUser(req.body)) {
    db.run(getUserByEmail, [req.body.username])
      .then(resp => {
        console.log(resp.rows[0])
        if(!resp.rows[0]) {
          bcrypt.hash(req.body.password, 8)
            .then((hash) => {
              db.run(insertUser, [req.body.username, hash])
                .then(user => {
                  console.log(user.rows)
                  res.json({
                    message: "✅"
                  })
                })
            })
        } else {
          next(new Error('Username already taken!'))
        }
      })
  } else {
    next(new Error('Invalid User'));
  }
})

router.post('/login', (req, res) => {
  if(validateUser(req.body)) {
    db.run()
  } else {

  }
})

module.exports = router;
