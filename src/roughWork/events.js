var EventEmitter = require('events').EventEmitter;

var getEvent = function(s) {
 if (isNaN(s)); {
 var e = new EventEmitter();
 setTimeout(function() {
  for (var i=1;i<10;i++) {
console.log(s,i);
   e.emit(s,i);
  }
 },200);
 return(e);
}
};
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('choose one out of these three \n 1-database \n 2-connection string \n 3-connection dropped \n');
process.stdin.on('data', function(c) { 
var r = getEvent(c);
r.on('database', function(i) {
 console.log("start event sent at " + i + ". User entered "+ c);
 });

r.on('connection string', function(d) {
 console.log("we got data " + d); 
 });

r.on('connection dropped', function(v) {
 console.log("this is end " + v);
});
 });
