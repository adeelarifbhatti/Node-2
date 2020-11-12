var express = require('express');
var firstRoute = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID

var capitalController = function (sideMenu){

	var getIndex = function (req,res){
 	if(req.user){
	var url = 'mongodb://my-mongo:27017/db-express';
	mongodb.connect(url, function(err,client){
	var collection = client.db('db-express')
	collection.collection('data').find({}).toArray(
		function(err,results){
			res.render('capitals',{title: 'From Second', 
			sideMenu: sideMenu,fakeData: results });
		}
	);
 });
}
};
	var getById = function(req,res){
 	var id = new objectId(req.params.id);
 	var url = 'mongodb://my-mongo:27017/db-express';
 		mongodb.connect(url, function(err, client){
 		var collection =  client.db('db-express');
 		collection.collection('data').findOne({_id :id},function(err,results){
 		
 			res.render('countryview', {title: 'From Second',
		 	sideMenu: sideMenu,
		 	fakeData: results});
		});
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