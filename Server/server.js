require('dotenv').config();
const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const port = 3000;

const habitRoutes = require('./routes/habits');
server.use('/habits', habitRoutes);

// Root route
server.get('/', (req, res) => res.send('Hello world!'));


server.listen(port, () => console.log(`Express now departing from http://localhost:${port}`));