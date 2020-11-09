var express = require('express');
var signup = express.Router();

var router = function(UAsideMenu) {

 signup.route('/').get(function(req,res){
	res.render('signup', {title: 'From Third', UAsideMenu: UAsideMenu});
	

 });
 return signup;
};


module.exports = router;