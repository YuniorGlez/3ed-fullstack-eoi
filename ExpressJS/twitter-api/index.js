const express = require('express');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://localhost/twitter-api-3ed', { useNewUrlParser: true })

app.use(express.json());

const usersRouter = require('./api/users');
const tweetsRouter = require('./api/tweets');

app.use('/api/users', usersRouter)
app.use('/api/tweets', tweetsRouter)


app.listen(5000, err => {
  if (err) return console.error({ err });
  console.log('Servidor escuchando en el puerto 5000');
})