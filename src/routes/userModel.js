var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

    username: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String
});

module.exports =  mongoose.model('User', UserSchema);