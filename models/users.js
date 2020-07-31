'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema(
{
	user: String,
	name: String,
	lastname: String,
	level: String,
	password: String
});

module.exports = mongoose.model('users', ProjectSchema);

// projects --> guarda los documentos en la coleccion	