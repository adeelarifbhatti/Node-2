var fs = require('fs');

var http = require('http');

http.createServer(function (req,res) {
 res.writeHead(200, {'content-Type': 'text/plain'});
 res.end("hello world");
 
}).listen(8080,process.env.IP); 
console.log("server started");


