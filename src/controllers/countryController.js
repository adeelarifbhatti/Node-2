var objectId = require('mongodb').ObjectID
const cc = require('../model/ccModel');

var countryController = function (countryService,sideMenu){
	var getIndex = function(req, res){
 	if(req.user){
 	// var url = 'mongodb://my-mongo:27017/db-express';
 	// mongodb.connect(url, function(err,client){

 	// 	var collection =  client.db('db-express');
 	// 	collection.collection('data').find({}).toArray(
 	// 			function(err, results){
 	// 					res.render('countries', {title: 'From First', sideMenu: sideMenu, fakeData: results
	// 			   							 });
 	// 			});
 	// 	}); 
	 cc.find({}).then((results) => {
	 console.log(results);
	 res.render('countries', {title: 'From First', sideMenu: sideMenu, fakeData: results});

	 });

};
}; 
	var getById =function (req,res){
	var id = new objectId(req.params.id);
	// var url = 'mongodb://my-mongo:27017/db-express';
	// mongodb.connect(url, function(err, client){

	// 	var collection = client.db('db-express');
	// 	collection.collection('data').findOne({_id :id}, function(err, results) { 
	// 								countryService.getCountryById(results.countryId,
	// 									function(err, cb){
	// 										results.description = cb;
	// 										res.render('capitalview', {title: 'From First',
	// 									    sideMenu: sideMenu,
	// 									    fakeData: results});										    
	// 									});
	// 						 }
	// 			    		);		
	// });
	cc.findOne({_id :id}).then((results) => {
		console.log(results);
	});
  };
  	var middleWare = function(req,res,next){
		if(!req.user){
			res.redirect('/signin');
		}
		next();
	};

	return {
		getIndex: getIndex,
		getById: getById,
		middleWare: middleWare
	};
};
module.exports = countryController;