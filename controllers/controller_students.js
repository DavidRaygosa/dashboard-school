'use strict'

var StudentModel = require('../models/students'); // Importa el modelo con mongoose
var fs = require('fs'); // Importa Libreria Para Borrar Archivo
var path = require('path'); // Importa Libreria Para Cargar Rutas Fisicas De Sistema De Archivo

var controller_student = 
{

	// Save New Student
	saveStudent: (req, res) =>
	{
		var project = new StudentModel();
		var params = req.body;

		// Personal Info Student

		project.name = params.name;
		project.lastname_p = params.lastname_p;
		project.lastname_m = params.lastname_m;
		project.curp = params.curp;
		project.gender = params.gender;
		project.birthday = params.birthday;

		// Home Info

		project.municipio = params.municipio;
		project.colonia = params.colonia;
		project.calle = params.calle;
		project.nocasa = params.nocasa;
		project.cp = params.cp;
		project.mobile = params.mobile;
		project.homenumber = params.homenumber;
		
		// Parents Info

		project.fathername = params.fathername;
		project.fathercurp = params.fathercurp;
		project.fatherine = params.fatherine;
		project.fatheremail = params.fatheremail;
		project.fathermobile = params.fathermobile;
		project.fatherocupation = params.fatherocupation;
		project.mothername = params.mothername;
		project.mothercurp = params.mothercurp;
		project.motherine = params.motherine;
		project.motheremail = params.motheremail;
		project.mothermobile = params.mothermobile;
		project.motherocupation = params.motherocupation;

		// School Info

		project.turn = params.turn;
		project.gen = params.gen;
		project.matricula = params.matricula;
		project.registerday = params.registerday;
		project.nss = params.nss;
		project.group = params.group;
		project.semester = params.semester;

		// BaseData Info

		project.createdby = params.createdby;
		project.modifiedby = params.modifiedby;
		project.lastupdate = params.lastupdate;

		project.save((error,StudentStored) => 
		{
			if(error) return res.status(500).send({message: "Error Al Guardar"});
			if(!StudentStored) return res.status(404).send({message:'No Se Ha Podido Guardar Al Alumno'})
			return res.status(200).send({student:StudentStored});
		});
	},

	// Get Student By ID
	getStudent: (req, res) =>
	{
		var params = req.params.id;
		if(params == null) return res.status(404).send({message:'El Proyecto No Existe'});
		StudentModel.find({_id: params}).exec((error, student) =>
		{
			if(error) return res.status(500).send({message:'Error Al Devolver Los Datos'});
			if(!student) return res.status(404).send({message:'El Proyecto No Existe'});
			return res.status(200).send({student});
		});
	},

	// Get All Students
	getStudents: (req, res) =>
	{
		var params = req.params.gen;
		StudentModel.find({gen:params/*[EJ: year:2019]*/}).exec((error,students) =>
		{
			if(error) return res.status(500).send({message: "Error Al Devolver Los Datos"});
			if(students.length==0) return res.status(200).send({message: "No Hay Proyectos Para Mostrar"});
			return res.status(200).send({students});
		});
	},


	// Update Group
	setGroup: (req, res) =>
	{
		var projectID = req.params.id;
		var update = req.body;
		StudentModel.findByIdAndUpdate(projectID, update, {new:true} ,(error, projectUpdated) =>
		{
			if(error) return res.status(500).send({message: 'Error Al Actualizar'});
			if(!projectUpdated) return res.status(404).send({message: 'No Existe El Proyecto'});
			return res.status(200).send({project: projectUpdated});
		});
	}
}

module.exports = controller_student;