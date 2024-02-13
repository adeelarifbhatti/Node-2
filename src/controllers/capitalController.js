var express = require('express');
var firstRoute = express.Router();
const cc = require('../model/ccModel');


var capitalController = function (sideMenu){

	var getIndex = function (req,res){
 	if(req.user){
	cc.find({}).then((results) => {
	console.log(results);
	res.render('capitals', {title: 'From First', sideMenu: sideMenu, fakeData: results});
	});
}
};
	var getById = function(req,res){
	 cc.findById({_id :req.params.id}).then((results) => {
		console.log(results);
		res.render('countryview', {title: 'From First', sideMenu: sideMenu, fakeData: results});
		});
};
	var middleWare = function(req,res,next){
		if(!req.user){
			res.redirect('/');
		}
		next();
	};
	return {
		getIndex: getIndex,
		getById: getById,
		middleWare: middleWare
	};
};
module.exports = capitalController;