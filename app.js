var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.use(express.static('src/view'));
 
app.get('/', function(req,res){
	res.send('very basic first app, kind of hello world');
});

app.listen(port, function(err) {
	console.log("the server on port " + port);


});
