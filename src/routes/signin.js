var express = require('express');
var signin = express.Router();

var router = function(UAsideMenu){

 signin.route('/').get(function (req,res){
	res.render('signin', {title: 'From Fourth', UAsideMenu: UAsideMenu});
 });
return signin;

};

module.exports = router;