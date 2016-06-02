var express = require('express');
var fourthRoute = express.Router();

var router = function(sideMenu){

 fourthRoute.route('/').get(function (req,res){
	res.render('fourth', {title: 'From Fourth', sideMenu: sideMenu});
 });
return fourthRoute;

};

module.exports = router;