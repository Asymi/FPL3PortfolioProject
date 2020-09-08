const express = require('express');
// const db = require('../db/config');
const app = express();
app.use(express.json())
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const users = [{
    username: 'despoina',
    password: 'mypassword'
}]

app.get('/users', (req,res) => {
    res.json(users)
})

app.post('/users', async (req,res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = {username: req.body.username, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    } catch {
        res.status(500).send()
    }
})

app.post('/users/login', async (req,res) =>{
    //authentication will go here: Albie did this already?

    //next bit is authorization with jwt
    const username = req.body.username
    const user = {name: username}
    const accessToken = jwt.sign(user,process.env.ACCESS_TOKEN)
    res.json({accessToken: accessToken})
})


