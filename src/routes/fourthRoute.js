var express = require('express');
var fourthRoute = express.Router();

fourthRoute.route('/').get(function (req,res){
	res.render('fourth', {title: 'From Fourth', sideMenu:[
						{Link: '/first', Text: 'First'},
						{Link: '/second', Text: 'Second'},
						{Link: '/third', Text:'Third'},
						{Link: '/fourth', Text:'Fourth'},
						{Link: '/fifth', Text: 'Fifth'}
						]
	});

});

module.exports = fourthRoute;