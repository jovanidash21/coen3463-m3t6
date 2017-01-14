var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moviesDataSchema = new Schema
(
    {
        title: {type: String, required: true},
        posterImage: {type: String, required: true},
        director: {type: String, required: true},
        studio: {type: String, required: true},
        starring: {type: Number, required: true, unique: true},
        genre: {type: String, required: true},
        plot: {type: String, required: true},
        imdbLink: {type: String, required: true},
        youtubeTrailerLink: {type: String, required: true},
        image: {type: String, required: true},
        grossTicketSales: {type: String, required: true},
        createDate: {type: Date, default: Date.now},
        updateDate: {type: Date, default: Date.now}
    },
    {
        collection: 'moviesData'
    }
);

moviesData = mongoose.model('moviesData', moviesDataSchema);