var passport = require('passport');
var LocalStrategies = require('passport-local').Strategy;
var mongodb = require('mongodb').MongoClient

var localStrategyAuth = function () {
	var userpass = new LocalStrategies({
		usernameField: 'username',
		passwordField: 'password'
	},function(username, password, done){
		var url = 'mongodb://my-mongo:27017/db-express';
		mongodb.connect(url, function(err, db) {
		var collection = db.collection('users');
		collection.findOne({username: username}, 
			function(err, results){
				if (results===null) { return done(null, false, {message: 'bad user'})}
				if (results.password === password){
					var user = results;
					done(null, user);
				}
				 else {
				 	done(null, false, {message: 'bad password'});
				 }
				
			}
		);

		
		});
	});

	passport.use(userpass);

return LocalStrategies;
};

module.exports = localStrategyAuth;
