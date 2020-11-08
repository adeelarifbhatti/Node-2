var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser =require('cookie-parser');
var passport = require('passport');



var app = express();
var port = process.env.PORT || 8080;
var sideMenu = [		
										{Link: '/countries', Text: 'Countries'}, 
										{Link: '/capitals', Text: 'Capitals'}, 
										{Link: '/signup', Text: 'SignUp'}, 
										{Link: '/signin', Text: 'SignIn'}, 
										{Link: '/adminpage', Text: 'AdminPage'}
																
		    ];
var countries = require('./src/routes/countries')(sideMenu);
var capitals = require('./src/routes/capitals')(sideMenu);
var signup = require('./src/routes/signup')(sideMenu);
var signin = require('./src/routes/signin')(sideMenu);
var adminpage = require('./src/routes/adminpage')(sideMenu);
var fakeData = require('./src/routes/fakeData')(sideMenu);
var authRouter = require('./src/routes/authRouter')(sideMenu);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'learning'}));
require('./src/config/passport')(app);

app.set('views','./src/view');
app.set('view engine', 'ejs');

/*
The following method is for the index-backup page, it along with index-back has no use.
*/
app.get('/index-backup', function(req,res){
	res.render('index-backup', {title: 'No Use of this Page',menu: ['11First','Second','Third']});
});
app.use('/countries', countries);
app.use('/capitals', capitals);
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/adminpage', adminpage);
app.use('/fakeData', fakeData);
app.use('/auth', authRouter);

app.get('/', function(req,res){
	res.render('index', {title: 'FromMain', sideMenu: sideMenu});
	});
app.listen(port, function(err) {
	console.log("the server on port " + port);


});
