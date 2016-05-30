var express = require('express');
var secondRoute = express.Router();

secondRoute.route('/').get(function (req,res){
res.render('second',{title: 'From Second', sideMenu: 
												[
												{Link: '/first' , Text: 'First'},
												{Link: '/second' , Text: 'Second'},
												{Link: '/third', Text: 'Third'},
												{Link: '/fourth', Text: 'Fourth'},
												{Link: 'fifth', Text: 'Fifth'}
									

												] 

											});


});


module.exports = secondRoute;