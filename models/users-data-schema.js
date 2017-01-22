var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var timestamps = require('mongoose-timestamp');

var usersDataSchema = new Schema
(
    {
        firstName: {type:String},
        lastName: {type:String},
        email: {type:String},
        website: {type:String},
        profileImage: {type:String}
    },
    {
        collection: 'usersData'
    }
);

usersDataSchema.plugin(passportLocalMongoose);
usersDataSchema.plugin(timestamps);

usersData = mongoose.model('usersData', usersDataSchema);