'use strict'

var GroupModel = require('../models/groups'); // Importa el modelo con mongoose
var fs = require('fs'); // Importa Libreria Para Borrar Archivo
var path = require('path'); // Importa Libreria Para Cargar Rutas Fisicas De Sistema De Archivo

var controller_group = 
{

	// Save New Student
	saveGroup: (req, res) =>
	{
		var project = new GroupModel();
		var params = req.body;

		// Group Data Info

		project.group = params.group;
		project.semester = params.semester;
		project.gen = params.gen;
		project.turn = params.turn;
		project.students = params.students;

		// BaseData Info

		project.createdby = params.createdby;
		project.modifiedby = params.modifiedby;
		project.lastupdate = params.lastupdate;

		project.save((error,GroupStored) => 
		{
			if(error) return res.status(500).send({message: "Error Al Guardar"});
			if(!GroupStored) return res.status(404).send({message:'No Se Ha Podido Guardar Al Docente'})
			return res.status(200).send({Groups:GroupStored});
		});
	},

	// Get Group By ID
	getGroupByID: (req, res) =>
	{
		var params = req.params.id;
		if(params == null) return res.status(404).send({message:'El Proyecto No Existe'});
		GroupModel.find({_id: params}).exec((error, group) =>
		{
			if(error) return res.status(500).send({message:'Error Al Devolver Los Datos'});
			if(!group) return res.status(404).send({message:'El Proyecto No Existe'});
			return res.status(200).send({group});
		});
	},

	// Get Group By GEN
	getGroup: (req, res) =>
	{
		var params = req.params.gen;
		if(params == null) return res.status(404).send({message:'El Proyecto No Existe'});
		GroupModel.find({gen:params}).exec((error,group) =>
		{
			if(error) return res.status(500).send({message: "Error Al Devolver Los Datos"});
			if(group.length==0) return res.status(200).send({message: "No Hay Proyectos Para Mostrar"});
			return res.status(200).send({group});
		});
	},

	// Update Group
	updateProject: (req, res) =>
	{
		var projectID = req.params.id;
		var update = req.body;
		GroupModel.findByIdAndUpdate(projectID, update, {new:true} ,(error, projectUpdated) =>
		{
			if(error) return res.status(500).send({message: 'Error Al Actualizar'});
			if(!projectUpdated) return res.status(404).send({message: 'No Existe El Proyecto'});
			return res.status(200).send({project: projectUpdated});
		});
	}
}

module.exports = controller_group;