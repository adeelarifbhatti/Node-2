var express = require('express');
var fakeData = express.Router();
var mongodb = require('mongodb').MongoClient;

var data = [
				{
					value1: 'fake value1', value2 : 'Microsoft', value3: 'fake value1'
				},
				{
					value1: 'fake value2', value2 : 'Oracle', value3: 'fake value2'
				},
				{
					value1: 'fake value3', value2 : 'IBM', value3: 'fake value3'
				},
				{
					value1: 'fake value4', value2 : 'Dell', value3: 'fake value4'
				},
				{
					value1: 'fake value5', value2 : 'Apple', value3: 'fake value5'
				}
			   ];

var router = function (sideMenu) {
	fakeData.route('/addData')
		.get(function (req,res) {
			var url = 'mongodb://my-mongo:27017/db-express';
			mongodb.connect(url, function(err,db){
				//var collection = db.collection('data');
				// collection.insertMany(data,
				// could be like above ....
				 db.collection('data').insertMany(data,
							 function (err,results){
							 	res.send(results);
							 	db.close();
								});


			});
		
		});

return fakeData;
}

module.exports = router;