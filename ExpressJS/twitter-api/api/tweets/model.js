const mongoose = require('mongoose');
const usersModel = require('./../users/model')

const SCHEMA = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'No se puede crear un tweet sin texto'],
    minlength: [3, 'No se aceptan tweets con menos de 3 caracteres'],
    maxlength: [255, 'Tweet demasiado largo, máximo 255 caracteres'],
  },
  createdAt: {
    type: Number,
    default: () => Date.now()
  },
  owner: {
    type: String,
    required: true,
    validate: {
      validator(val) {
        return usersModel.findOne({ username: val })
          .then(data => data ? true : false)
      },
      msg: 'No existe ningún usuario con el username @{VALUE}'
    },
    
  }
})


const MODEL = mongoose.model('tweet', SCHEMA);

module.exports = MODEL;