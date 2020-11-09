var express = require('express');
var firstRoute = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID



var router = function(sideMenu){
	firstRoute.use(function(req,res,next){
		if(!req.user){
			res.redirect('/signin');
		}
		next();
	});
 firstRoute.route('/').get(function (req,res){
 	if(req.user){
 	var url = 'mongodb://my-mongo:27017/db-express';
 	mongodb.connect(url, function(err,db){
 		var collection =  db.collection('data');
 		collection.find({}).toArray(
 				function(err, results){
 						res.render('countries', {title: 'From First', sideMenu: sideMenu, fakeData: results
				   							 }
									);
 				});
 		});

  }
});

 firstRoute.route('/:id').get(function (req,res){
	var id = new objectId(req.params.id);
	var url = 'mongodb://my-mongo:27017/db-express';
	mongodb.connect(url, function(err, db){

		var collection = db.collection('data');
		collection.findOne({_id :id}, function(err, results) { 
										res.render('capitalview', {title: 'From First',
										 sideMenu: sideMenu,
										 fakeData: results});
							 }
				    		);
		
	});
	

  });
 return firstRoute;
}

module.exports = router;
