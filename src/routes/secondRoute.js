var express = require('express');
var secondRoute = express.Router();

var router = function(sideMenu){
secondRoute.route('/').get(function (req,res){
res.render('second',{title: 'From Second', sideMenu: sideMenu });


});
return secondRoute;
};

module.exports = router;