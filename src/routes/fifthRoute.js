var express = require('express');
var fifthRoute = express.Router();

fifthRoute.route('/').get(function (req,res){
	res.render('fifth', {title: 'From Fifth', sideMenu: [	
									{Link: '/first', Text: 'First'},
									{Link: '/second', Text: 'Second'},
									{Link: '/third', Text:'Third'},
									{Link: '/fourth', Text:'Fourth'},
									{Link: '/fifth', Text: 'Fifth'}

		

		]});



});



module.exports = fifthRoute;