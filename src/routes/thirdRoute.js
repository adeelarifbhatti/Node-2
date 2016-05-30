var express = require('express');
var thirdRoute = express.Router();

thirdRoute.route('/').get(function(req,res){
	res.render('third', {title: 'From Third', sideMenu:[ 
						{Link: '/first', Text: 'First'},
						{Link: '/second', Text: 'Second'},
						{Link: '/third', Text:'Third'},
						{Link: '/fourth', Text:'Fourth'},
						{Link: '/fifth', Text: 'Fifth'}
						]		

	});

});

module.exports = thirdRoute;