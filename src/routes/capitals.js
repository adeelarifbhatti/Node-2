var express = require('express');
var secondRoute = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID

var router = function(sideMenu){
		var capitalController = require('../controllers/capitalController')(sideMenu);
		secondRoute.use(capitalController.middleWare);
 secondRoute.route('/').get(capitalController.getIndex);

 secondRoute.route('/:id').get(capitalController.getById);


return secondRoute;

}
module.exports = router;