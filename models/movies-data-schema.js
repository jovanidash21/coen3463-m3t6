var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var moviesDataSchema = new Schema
(
    {
        title: {type: String, required: true},
        posterImage: {type: String},
        director: {type: String},
        studio: {type: String},
        starring: {type: String},
        year: {type: String},
        genre: {type: String},
        plot: {type: String},
        imdbLink: {type: String},
        youtubeTrailerLink: {type: String},
        image: {type: String},
        grossTicketSales: {type: String}
    },
    {
        collection: 'moviesData'
    }
);

moviesDataSchema.plugin(timestamps);

moviesData = mongoose.model('moviesData', moviesDataSchema);