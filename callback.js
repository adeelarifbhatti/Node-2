var addingNumber = function(v, callback) {
 if (isNaN(v))
 callback(new Error("please enter integer only"));
 if (!isNaN(v)&& v>0 ){ 
  for (var i=0;i<10;i++){
   if (v<7) {
    v++ 
    callback(null,v+v);
    }
   if (v>7) {
    callback(new Error("v is greater than 7"));
    i=10;
    }
   }
  }
 }
process.stdin.resume();
process.stdin.on('data',function(chunk) {
 
addingNumber(chunk,function(err, plus) {
 if (err) {
  console.log("what went wrong is "+ err.message);
  }
 else {
  console.log("results are: " + plus);
 }
});
}
);

 
  
