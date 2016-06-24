var passport = require('passport');
var LocalStrategies = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient

var localStrategyAuth = function () {
	var userpass = new LocalStrategies({
		usernameField: 'UserName',
		passwordField: 'Password'
	},function(username, password, done){
		var url = 'mongodb://127.0.0.1:27017/db-express';
		mongodb.connect(url, function(err, db) {
		var collection = db.collection('users');
		collection.findOne({username: username}, 
			function(err, results){
				var user = results;
				done(null, user);
			}
		);

		
		});
	});

	passport.use(userpass);

return LocalStrategies;
};

module.exports = localStrategyAuth;
