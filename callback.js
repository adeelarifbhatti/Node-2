var addingNumber = function(v, callback) {
  callback(null,v+v);
  }
 
var results = function(err, plus) {
 if (err) {
 	console.log("what went wrong is"+ err.message);
 } else {
	console.log("results are: " + plus);
   }
};
addingNumber(10,results);

 
  
