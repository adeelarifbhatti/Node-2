var passport = require('passport');
var LocalStrategies = require('passport-local').Strategy;

var localStrategyAuth = function () {
	var userpass = new LocalStrategies({
		usernameField: 'UserName',
		passwordField: 'Password'
	},function(username, password, done){

		var user = {
			username: username,
			password: password
		};
		done(null,user);
	});

	passport.use(userpass);

return LocalStrategies;
};

module.exports = localStrategyAuth;
