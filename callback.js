var addingNumber = function(v, callback) {
 for (var i=0;i<10;i++){
  if (v<7) { 
  callback(null,v+v);
  v++;
  }
 else callback(new Error("v is greater than 7"));
 }
}
 
addingNumber(2,function(err, plus) {
 if (err) {
  console.log("what went wrong is "+ err.message);
  }
 else {
  console.log("results are: " + plus);
 }
}
);

 
  
