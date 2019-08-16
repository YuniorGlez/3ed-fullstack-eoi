const mongoose = require('mongoose');


const SCHEMA = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'No se puede crear un usuario sin username'],
    unique: [true, 'El username {VALUE} ya está cogido'],
    minlength: [3, 'No se aceptan username con menos de 3 caracteres'],
    maxlength: [60, 'Username demasiado largo, máximo 60 caracteres'],
    lowercase : true,
    validate : {
      validator (v) {
        return !v.trim().includes(" ");
      },
      msg : 'No se pueden crear usernames con espacios '
    },
    trim : true
  },
  name: {
    type: String,
    maxlength: 140,
  },
  email: {
    type: String,
    required: [true, 'No se puede crear un usuario sin email'],
    unique: [true, 'El email {VALUE} ya está cogido'],
    minlength: [5, 'No se aceptan email con menos de 5 caracteres'],
    maxlength: [60, 'Email demasiado largo, máximo 60 caracteres'],
    validate: {
      validator(val) {
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return regex.test(val);
      },
      msg: 'Email inválido'
    }
  },
  tweets: {
    type: Array,
    default: []
  }
})


const MODEL = mongoose.model('user', SCHEMA);

module.exports = MODEL;