var express = require('express');
var firstRoute = express.Router();




firstRoute.route('/').get(function (req,res){
	res.render('first', {title: 'From First', sideMenu: [																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				        ]}
				);

 });

module.exports = firstRoute;
	