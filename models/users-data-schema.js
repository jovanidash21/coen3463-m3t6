var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var usersDataSchema = new Schema
(
    {
        firstName: {type:String},
        lastName: {type:String},
        email: {type:String},
        profileImage: {type:String}
    },
    {
        collection: 'usersData'
    }
);

usersDataSchema.plugin(passportLocalMongoose);

usersData = mongoose.model('usersData', usersDataSchema);