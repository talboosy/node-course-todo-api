var mongoose = require('mongoose');
var User = mongoose.model('User',{
    mail: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

module.exports = {User};