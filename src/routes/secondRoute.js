var express = require('express');
var secondRoute = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID

var router = function(sideMenu){
 secondRoute.route('/').get(function (req,res){
	var url = 'mongodb://my-mongo:27017/db-express';
	mongodb.connect(url, function(err,db){
	var collection = db.collection('data')
	collection.find({}).toArray(
		function(err,results){
			res.render('second',{title: 'From Second', 
			sideMenu: sideMenu,fakeData: results });
		}
	);
 });
});
 secondRoute.route('/:id').get(function(req,res){
 	var id = new objectId(req.params.id);
 	var url = 'mongodb://my-mongo:27017/db-express';
 		mongodb.connect(url, function(err, db){
 		var collection =  db.collection('data');
 		collection.findOne({_id :id},function(err,results){
 		
 			res.render('secondView', {title: 'From Second',
		 	sideMenu: sideMenu,
		 	fakeData: results});
		});
 	});
});


return secondRoute;

}
module.exports = router;