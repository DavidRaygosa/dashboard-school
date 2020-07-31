'use strict'

var TeacherModel = require('../models/teachers'); // Importa el modelo con mongoose
var fs = require('fs'); // Importa Libreria Para Borrar Archivo
var path = require('path'); // Importa Libreria Para Cargar Rutas Fisicas De Sistema De Archivo

var controller_teacher = 
{

	// Save New Student
	saveTeacher: (req, res) =>
	{
		var project = new TeacherModel();
		var params = req.body;

		// Personal Data Teacher

		project.name = params.name;
		project.lastname_p = params.lastname_p;
		project.lastname_m = params.lastname_m;
		project.gender = params.gender;
		project.birthday = params.birthday;
		project.curp = params.curp;
		project.rfc = params.rfc;
		project.notel = params.notel;
		project.email = params.email;
		project.grade = params.grade;

		// School Data Teacher

		project.clavesp = params.clavesp;
		project.plaza = params.plaza;
		project.category = params.category;
		project.cct = params.cct;
		project.status = params.status;
		project.start = params.start;
		project.end = params.end;
		project.hours = params.hours;
		project.contract = params.contract;

		// BaseData Info

		project.createdby = params.createdby;
		project.modifiedby = params.modifiedby;
		project.lastupdate = params.lastupdate;

		project.save((error,TeacherStored) => 
		{
			if(error) return res.status(500).send({message: "Error Al Guardar"});
			if(!TeacherStored) return res.status(404).send({message:'No Se Ha Podido Guardar Al Docente'})
			return res.status(200).send({teacher:TeacherStored});
		});
	},

	// Get All Teachers
	getTeachers: (req, res) =>
	{
		TeacherModel.find({}).exec((error,teachers) =>
		{
			if(error) return res.status(500).send({message: "Error Al Devolver Los Datos"});
			if(teachers.length==0) return res.status(200).send({message: "No Hay Proyectos Para Mostrar"});
			return res.status(200).send({teachers});
		});
	}
}

module.exports = controller_teacher;