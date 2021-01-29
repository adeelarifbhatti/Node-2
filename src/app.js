var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser =require('cookie-parser');
var passport = require('passport');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({ path: `${__dirname}/config.env` });



var app = express();
mongoose.connect( process.env.DATABASE_LOCAL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false

}).then(dbconnection =>{
//	console.log(dbconnection.connections);
	console.log('Database is connected');
});

var port = process.env.PORT || 8080;
var sideMenu = [		
										{Link: '/countries', Text: 'Countries'}, 
										{Link: '/capitals', Text: 'Capitals'}, 
										{Link: '/adminpage', Text: 'AdminPage'},
										{Link: '/auth/signout', Text: 'SignOut'}
																
		    ];
var UAsideMenu = [		
										{Link: '/signup', Text: 'SignUp'}, 
										{Link: '/signin', Text: 'SignIn'}, 
																
		    ];
var countries = require('./routes/countries')(sideMenu);
var capitals = require('./routes/capitals')(sideMenu);
var signup = require('./routes/signup')(UAsideMenu);
var signin = require('./routes/signin')(UAsideMenu);
var adminpage = require('./routes/adminpage')(sideMenu);
var fakeData = require('./routes/fakeData')(sideMenu);
var authRouter = require('./routes/authRouter')(sideMenu);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'learning'}));
require('./config/passport')(app);

app.set('views','./src/view');
app.set('view engine', 'ejs');

/*
The following method is for the index-backup page, it along with index-back has no use.
*/
app.get('/index-backup', function(req,res){
	res.render('index-backup', {title: 'No Use of this Page',menu: ['First','Second','Third']});
});
app.use('/countries', countries);
app.use('/capitals', capitals);
app.use('/signup', signup);
app.use('/signin', signin);
app.use('/adminpage', adminpage);
app.use('/fakeData', fakeData);
app.use('/auth', authRouter);

app.get('/', function(req,res){
	res.render('index', {title: 'FromMain', UAsideMenu: UAsideMenu});
	});
app.listen(port, function(err) {
	console.log("the server on port " + port);


});
