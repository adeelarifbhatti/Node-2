var express= require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


var router = function() {
	authRouter.route('/signup')
	.post(function(req,res) {
		console.log(req.body);
		var url = 'mongodb://127.0.0.1:27017/db-express';
		mongodb.connect(url, function(err,db){
			var collection = db.collection('users');
			var user = {
				username: req.body.UserName,
				password: req.body.Password
			};
			collection.insert(user, function(err, results){
				req.login(results.ops[0], function(){
					res.redirect('/auth/profile');
				});


			});


		});

		/* When passport does it's things i.e. passport.initialize and passport.session and middleware it would add  things to request for us to use, the following login function is one of them,
		so login function would tell passport that this user is logged in, in sign in it is not required as the authentication would deal with it but in this case I wanted the signed up
		user to be logged-in in the same time.
		we are using req.body because we haven't created the 'user'
		*/
		

	authRouter.route('/profile')
	.get(function(req,res){
		// req.user lets you know that this user is signed in and here is his infoemation
		res.json(req.user);
	});
}); 

 return authRouter;
};

module.exports= router;