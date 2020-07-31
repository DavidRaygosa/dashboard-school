'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema(
{
	// Group Data Info

	group: Number,
	semester: Number,
	gen: String,
	turn: String,
	students: { type : Array , "default" : [] },

	// BaseData Info

	createdby: String,	
	modifiedby: String,
	lastupdate: String
});

module.exports = mongoose.model('groups', ProjectSchema);

// projects --> guarda los documentos en la coleccion	