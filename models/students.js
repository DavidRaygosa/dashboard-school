'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema(
{

	// Personal Info Student

	name: String,
	lastname_p: String,
	lastname_m: String,
	curp: String,
	gender: String,
	birthday: String,

	// Home Info

	municipio: String,
	colonia: String,
	calle: String,
	nocasa: Number,
	cp: Number,
	mobile: Number,
	homenumber: Number,

	// Parents Info

	fathername: String,
	fathercurp: String,
	fatherine: String,
	fatheremail: String,
	fathermobile: Number,
	fatherocupation: String,
	mothername: String,
	mothercurp: String,
	motherine: String,
	motheremail: String,
	mothermobile: Number,
	motherocupation: String,

	// School Info

	turn: String,
	gen: String,
	matricula: String,
	registerday: String,
	nss: Number,
	group: String,
	semester: Number,

	// BaseData Info

	createdby: String,	
	modifiedby: String,
	lastupdate: String
});

module.exports = mongoose.model('students', ProjectSchema);

// projects --> guarda los documentos en la coleccion	