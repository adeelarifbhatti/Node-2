var passport = require('passport');
const User = require('../../model/userModel');
var LocalStrategies = require('passport-local').Strategy;

var localStrategyAuth = function () {
	var userpass = new LocalStrategies({
		usernameField: 'username',
		passwordField: 'password'
	},function(username, password, done) {
		User.findOne({ username: username }, function(err, user) {
		  if (err) { return done(err); }
		  if (!user) {
			return done(null, false, { message: 'Incorrect username.' });
		  }
		  if (!user.checkPassword(password, user.password)) {
			return done(null, false, { message: 'Incorrect password.' });
		  }
		  return done(null, user);
		});
	  });

	passport.use(userpass);

return LocalStrategies;
};

module.exports = localStrategyAuth;
