var express= require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');


var router = function(sideMenu) {
	authRouter.route('/signup')
	.post(function(req,res) {
		console.log(req.body);
		var url = 'mongodb://my-mongo:27017/db-express';
		mongodb.connect(url, function(err,db){
			var collection = db.collection('users');
			var user = {
				username: req.body.username,
				password: req.body.password
			};
			collection.insert(user, function(err, results){
				req.login(results.ops[0], function(){
					res.redirect('/auth/profile');
				});
			});  
		});
		});

		authRouter.route('/signin')
		.post(passport.authenticate('local', {
			failureRedirect: '/' 
		}), function(req,res) {
			console.log("INSIDE SIGNIN");
			res.redirect('/auth/profile');
			//res.render('profile', {title: 'From Profile',
			//sideMenu: sideMenu,result: req.user.username, result2: req.user.password});
			console.log(req.body);
		});

		authRouter.route('/signout')
		.get(function(req,res){
			req.session.destroy(function(err){
				console.log("Signing Out");
				res.redirect('/');
			});
		});
		
		

		/* When passport does it's things i.e. passport.initialize and passport.session and middleware it would add  things to request for us to use, the following login function is one of them,
		so login function would tell passport that this user is logged in, in sign in it is not required as the authentication would deal with it but in this case I wanted the signed up
		user to be logged-in in the same time.
		we are using req.body because we haven't created the 'user'
		*/
		

	authRouter.route('/profile')
		.all(function(req,res,next){
			if(!req.user){
				//res.render('error',{title: 'error',sideMenu: sideMenu, result: 'User is not logged in, please login'});
				res.redirect('/signin');
			}
			next();
		})
		.get(function(req,res){
			if(req.user){
		console.log("INSIDE PROFILE CREATION");
		// req.user lets you know that this user is signed in and here is his infoemation
		res.render('profile', {title: 'From Profile',
			sideMenu: sideMenu,result: req.user.username, result2: req.user.password});
		}
		//console.log(req.user.username);
		//res.json(req.user);
	});
	return authRouter;
};

module.exports= router;