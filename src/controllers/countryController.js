var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID

var countryController = function (countryService,sideMenu){
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
	var getById =function (req,res){
	var id = new objectId(req.params.id);
	var url = 'mongodb://my-mongo:27017/db-express';
	mongodb.connect(url, function(err, db){

		var collection = db.collection('data');
		collection.findOne({_id :id}, function(err, results) { 
									countryService.getCountryById(results.countryId,
										function(err, cb){
											results.description = cb;
											res.render('capitalview', {title: 'From First',
										    sideMenu: sideMenu,
										    fakeData: results});
										    
										});

							 }
				    		);
		
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