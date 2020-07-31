'use strict'

var Project = require('../models/users'); // Importa el modelo con mongoose
var fs = require('fs'); // Importa Libreria Para Borrar Archivo
var path = require('path'); // Importa Libreria Para Cargar Rutas Fisicas De Sistema De Archivo

var controller_user = 
{

	// Save New User
	saveUser: (req, res) =>
	{
		var project = new Project();
		var params = req.body;
		project.user = params.user;
		project.name = params.name;
		project.lastname = params.lastname;
		project.level = params.level;
		project.password = params.password;

		project.save((error,projectStored) => 
		{
			if(error) return res.status(500).send({message: "Error Al Guardar"});
			if(!projectStored) return res.status(404).send({message:'No Se Ha Podido Guardar El Proyecto'})
			return res.status(200).send({user:projectStored});
		});
	},

	// Get User By "User"
	getUser: (req, res) =>
	{
		var params = req.params.user;
		if(params == null) return res.status(404).send({message:'El Proyecto No Existe'});

		Project.find({user:params/*[EJ: year:2019]*/}).exec((error,user) =>
		{
			if(error) return res.status(500).send({message: "Error Al Devolver Los Datos"});
			if(!user) return res.status(404).send({message: "No Hay Proyectos Para Mostrar"});
			return res.status(200).send({user});
		});
	}
}

module.exports = controller_user;