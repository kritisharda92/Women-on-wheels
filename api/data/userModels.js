var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    isExistingUser : {
        type : Boolean,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

mongoose.model('User', userSchema, 'Authentication');