var EventEmitter = require('events').EventEmitter;

var getEvent = function(v) {
 var e = new EventEmitter();
 setTimeout(function() {
  for (var i=1;i<v;i++) {
   e.emit('triggered',i);
   if (i===7) {
    console.log("this is from new Error");
    return new Error( "this is error"); 
   } 
   if (i===4)
   e.emit('db-connection', i);
   if (i===6)
   e.emit('connection-dropped',i);
  }
 },900);
 return(e);
};

var r = getEvent(13);
r.on('triggered', function(i) {
 console.log("start event sent at " + i);
 });

r.on('db-connection', function(d) {
 console.log("we got data " + d); 
 });

r.on('connection-dropped', function(v) {
 console.log("this is end " + v);
 });
