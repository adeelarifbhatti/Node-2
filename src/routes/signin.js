var express = require('express');
var signin = express.Router();

var router = function(sideMenu){

 signin.route('/').get(function (req,res){
	res.render('signin', {title: 'From Fourth', sideMenu: sideMenu});
 });
return signin;

};

module.exports = router;