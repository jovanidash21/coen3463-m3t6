var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var moviesDataSchema = new Schema
(
    {
        title: {type: String, required: true},
        posterImage: {type: String},
        directors: [{
            director1: {type: String},
            director2: {type: String},
            director3: {type: String}
        }],
        studios: [{
            studio1: {type: String},
            studio2: {type: String},
            studio3: {type: String},
            studio4: {type: String},
            studio5: {type: String}
        }],
        starring: [{
            starring1: {type: String},
            starring2: {type: String},
            starring3: {type: String},
            starring4: {type: String},
            starring5: {type: String},
            starring6: {type: String},
            starring7: {type: String},
            starring8: {type: String},
            starring9: {type: String},
            starring10: {type: String}
        }],
        year: {type: String},
        genre: {type: String},
        plot: {type: String},
        imdbLink: {type: String},
        trailerLinks: [{
            trailerLink1: {type: String},
            trailerLink2: {type: String},
            trailerLink3: {type: String}
        }],
        imageLinks: [{
            imageLink1: {type: String},
            imageLink2: {type: String},
            imageLink3: {type: String},
            imageLink4: {type: String}
        }],
        grossTicketSales: {type: String}
    },
    {
        collection: 'moviesData'
    }
);

moviesDataSchema.plugin(timestamps);

moviesData = mongoose.model('moviesData', moviesDataSchema);