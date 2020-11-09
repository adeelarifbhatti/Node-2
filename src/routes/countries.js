var express = require('express');
var firstRoute = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID



var router = function(sideMenu){
	var countryController = require('../controllers/countryController')(sideMenu);
	firstRoute.use(countryController.middleWare);
 firstRoute.route('/').get(countryController.getIndex);

 firstRoute.route('/:id').get(countryController.getById);
 return firstRoute;
}

module.exports = router;
