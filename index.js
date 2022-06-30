require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL
const logs = require('./routes/users');
const users = require('./routes/logs');

const app = express();

app.use(express.json());

app.listen(80, () => {
    console.log(`Server Started at ${80}`)
})

app.use('/api', logs)

app.use('/api', users)

mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})