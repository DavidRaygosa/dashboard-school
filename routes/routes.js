'use strict'

var express = require('express');

// Controllers

var UserController = require('../controllers/controllers_users');
var StudentController = require('../controllers/controller_students');
var TeacherController = require('../controllers/controller_teachers');
var GroupController = require('../controllers/controller_groups');
var router = express.Router();

// MiddleWare

var multipart = require('connect-multiparty');
var multipartMiddleWare = multipart({uploadDir: './uploads'});

// Routes

	// Users
		router.post('/save-user',UserController.saveUser);
		router.get('/get-user/:user',UserController.getUser);

	// Students

		router.post('/save-student',StudentController.saveStudent);
		router.get('/get-student/:id', StudentController.getStudent);
		router.get('/get-students/:gen',StudentController.getStudents);
		router.put('/set-group/:id',StudentController.setGroup);

	// Teachers

		router.post('/save-teacher',TeacherController.saveTeacher);
		router.get('/get-teachers',TeacherController.getTeachers);

	// Groups

		router.post('/save-group',GroupController.saveGroup);
		router.get('/get-groupbyid/:id', GroupController.getGroupByID);
		router.get('/get-group/:gen',GroupController.getGroup);
		router.put('/update-group/:id',GroupController.updateProject);

module.exports = router;