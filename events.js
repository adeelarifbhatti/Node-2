var EventEmitter = require('events').EventEmitter;

var getEvent = function() {
 var e = new EventEmitter();
 setTimeout(function() {
  e.emit('triggered');
  console.log("from function");
  },900);
 return(e);
};

var r = getEvent();

r.on('triggered', function() {
 console.log("this is start");
 });

