var express = require('express');
var thirdRoute = express.Router();

var router = function(sideMenu) {

 thirdRoute.route('/').get(function(req,res){
	res.render('third', {title: 'From Third', sideMenu: sideMenu});
	

 });
 return thirdRoute;
};


module.exports = router;