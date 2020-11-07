var express = require('express');
var signup = express.Router();

var router = function(sideMenu) {

 signup.route('/').get(function(req,res){
	res.render('signup', {title: 'From Third', sideMenu: sideMenu});
	

 });
 return signup;
};


module.exports = router;