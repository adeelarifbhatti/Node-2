var passport = require('passport');
const User = require('../../model/userModel');
var LocalStrategies = require('passport-local').Strategy;

var localStrategyAuth = function () {
	var userpass = new LocalStrategies({
		usernameField: 'username',
		passwordField: 'password'
	},async function(username, password, done) {
		const user = await User.findOne({username}).select("+password");
		if(!user){
			console.log("User not found")
			// following is for API ? 
			// return done(null, false, { message: 'Incorrect username.' });
		}	
		if(user){
		const isPasswordMatched = await user.checkPassword(password, user.password);	
		  if(!isPasswordMatched) {
			console.log("Password not found")
			return done();
			// following is for API ? 
			// return done(null, false, { message: 'Incorrect password.' });
		  }
		}
		return done(null, user);
		// Old Code !!!
		// User.findOne({ username: username }).then(user => {
		//   if (!user) {
		// 	return done(null, false, { message: 'Incorrect username.' });
		//   }
		//   if (!user.checkPassword(password, user.password)) {
		// 	return done(null, false, { message: 'Incorrect password.' });
		//   }
		//   return done(null, user);
		// });
	  });

	passport.use(userpass);

return LocalStrategies;
};

module.exports = localStrategyAuth;
