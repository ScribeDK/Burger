/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function(req,res) {
	res.redirect('/burgers')
});

router.get('/burgers', function(req,res) {
	burger.selectAll(function(data){
		var hbsObject = {products : data}
		console.log(hbsObject)
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req,res) {
	var dateNew = new Date();
	var date = dateNew.getDate() + "," + (dateNew.getMonth() + 1) + "," + dateNew.getFullYear();
	console.log(date);
	burger.insertOne(['burgerName', 'date'], [req.body.name + " burger", date], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:itemID', function(req,res) {
	var condition = 'itemID = ' + req.params.itemID;

	console.log('condition', condition);

	burger.update({'devoured' : req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;
