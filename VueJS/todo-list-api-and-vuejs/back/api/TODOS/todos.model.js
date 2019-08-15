const mongoose = require('mongoose');
const { yesNiggasSync } = require('./../../utils/functions');

var TODOschema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'El atributo text es requerido.'],
        minlength: [10, 'Haz de introducir mínimo 10 caracteres.'],
        validation: {
            validator: yesNiggasSync,
            message: 'Oye, no permito TODOs que contengan la palabra nigga'
        },
        unique: true
    },
    createdAt: {
        type: Number,
        required: true,
        default: () => Date.now()
    },
    isCompleted: {
        type: Boolean,
        default: false,
        required: true
    }
},
    { versionKey: false }
);

var TODO = mongoose.model('todo', TODOschema);

module.exports = TODO;