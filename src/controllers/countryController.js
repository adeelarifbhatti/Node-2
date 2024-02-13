const cc = require('../model/ccModel');

var countryController = function (countryService,sideMenu){
	var getIndex = function(req, res){
 	if(req.user){
	 cc.find({}).then((results) => {
	 console.log(results);
	 res.render('countries', {title: 'From First', sideMenu: sideMenu, fakeData: results});
	 });
};
}; 
	var getById =function (req,res){
	cc.findOne({_id :req.params.id}).then((results) => {
	console.log(results);
	res.render('capitalview', {title: 'From First', sideMenu: sideMenu, fakeData: results});

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