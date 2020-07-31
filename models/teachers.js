'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema(
{

	// Personal Data Teacher

	name: String,
	lastname_p: String,
	lastname_m: String,
	gender: String,
	birthday: String,
	curp: String,
	rfc: String,
	notel: Number,
	email: String,
	grade: String,

	// School Data Teacher

	clavesp: String,
	plaza: String,
	category: String,
	cct: String,
	status: String,
	start: String,
	end: String,
	hours: Number,
	contract: String,

	// BaseData Info

	createdby: String,	
	modifiedby: String,
	lastupdate: String
});

module.exports = mongoose.model('teachers', ProjectSchema);

// projects --> guarda los documentos en la coleccion	