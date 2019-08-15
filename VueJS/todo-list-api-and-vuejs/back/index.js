const express = require('express');
const app = express();
const cors = require('cors');

let config = require('./.env');
const environment = process.env.NODE_ENV;
config = config[environment];
if (!config)
    return console.error(`Invalid ${environment} environment`);

    
// Conectamos mongoose con nuestra db
const mongoose = require('mongoose');
mongoose.connect(config.mongoDBURI + config.mongoDBDataBaseName);

// Usamos middlewares
app.use(cors());
app.use(express.json());

const todosRouter = require('./api/TODOS');
app.use('/api/todos', todosRouter);

app.listen(config.port, (err) => {
    console.log('Servidor listo en el puerto ' + config.port);
})