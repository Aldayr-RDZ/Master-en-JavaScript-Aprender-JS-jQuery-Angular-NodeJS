'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs : String,
    image: String
})

module.exports = mongoose.model('Project', ProjectSchema)
//mongoose lo que hace es poner el primer argumento en minisculas y ponerlo en plural,
// si no existe lo crea, pero si existe lo utiliza -> guarda los documentos en la coleccion