var express = require('express');
var firstRoute = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID



var router = function(sideMenu){
	var countryController = require('../controllers/countryController')(sideMenu);
	firstRoute.use(function(req,res,next){
		if(!req.user){
			res.redirect('/signin');
		}
		next();
	});
 firstRoute.route('/').get(countryController.getIndex);

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
