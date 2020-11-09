var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID

var countryController = function (sideMenu){
	var getIndex = function(req, res){
 	if(req.user){
 	var url = 'mongodb://my-mongo:27017/db-express';
 	mongodb.connect(url, function(err,db){
 		var collection =  db.collection('data');
 		collection.find({}).toArray(
 				function(err, results){
 						res.render('countries', {title: 'From First', sideMenu: sideMenu, fakeData: results
				   							 });
 				});
 		});

  
};
}; 
	return {
		getIndex: getIndex
	};
};
module.exports = countryController;