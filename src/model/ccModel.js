var mongoose = require('mongoose');
var ccSchema = new mongoose.Schema({
    country: String,
    city: String,
});
const cc = mongoose.model("cc", ccSchema);


module.exports =  cc;