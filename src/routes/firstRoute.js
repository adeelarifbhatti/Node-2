var express = require('express');
var firstRoute = express.Router();
var mongodb = require('mongodb').MongoClient;




var router = function(sideMenu){
 firstRoute.route('/').get(function (req,res){
 	var url = 'mongodb://127.0.0.1:27017/db-express';
 	mongodb.connect(url, function(err,db){
 		var collection =  db.collection('data');
 		collection.find({}).toArray(
 				function(err, results){
 						res.render('first', {title: 'From First', sideMenu: sideMenu, fakeData: results
				   							 }
									);
 				});
 		});

  });

 firstRoute.route('/:id').get(function (req,res){
	var id = req.params.id;
	res.render('firstView', {title: 'From First', sideMenu: sideMenu, fakeData: fakeData[id]
				    }
				);

  });
 return firstRoute;
}

module.exports = router;
