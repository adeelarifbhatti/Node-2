var express = require('express');
var fifthRoute = express.Router();

var router = function(sideMenu){

 fifthRoute.route('/').get(function (req,res){
	res.render('adminpage', {title: 'From Fifth', sideMenu: sideMenu});
 });

return fifthRoute;

};

module.exports = router;