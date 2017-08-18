var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var moviesDataSchema = new Schema
(
  {
    title: {type: String, required: true},
    posterImage: {
      type: String,
      default: 'https://raw.githubusercontent.com/jovanidash21/mmff-movies/master/public/images/poster_images/default.png'
    },
    directors: [{
      director1: {type: String, default: ''},
      director2: {type: String, default: ''},
      director3: {type: String, default: ''}
    }],
    studios: [{
      studio1: {type: String, default: ''},
      studio2: {type: String, default: ''},
      studio3: {type: String, default: ''},
      studio4: {type: String, default: ''},
      studio5: {type: String, default: ''},
      studio6: {type: String, default: ''}
    }],
    starring: [{
      starring1: {type: String, default: ''},
      starring2: {type: String, default: ''},
      starring3: {type: String, default: ''},
      starring4: {type: String, default: ''},
      starring5: {type: String, default: ''},
      starring6: {type: String, default: ''},
      starring7: {type: String, default: ''},
      starring8: {type: String, default: ''},
      starring9: {type: String, default: ''},
      starring10: {type: String, default: ''},
      starring11: {type: String, default: ''},
      starring12: {type: String, default: ''}
    }],
    year: {type: String, default: ''},
    genre: {type: String ,default: ''},
    plot: {type: String, default: ''},
    imdbLink: {type: String, default: ''},
    trailerLinks: [{
      trailerLink1: {type: String, default: ''},
      trailerLink2: {type: String, default: ''},
      trailerLink3: {type: String, default: ''}
    }],
    imageLinks: [{
      imageLink1: {type: String, default: ''},
      imageLink2: {type: String, default: ''},
      imageLink3: {type: String, default: ''},
      imageLink4: {type: String, default: ''}
    }],
    grossTicketSales: {type: String, default: ''}
  },
  {
    collection: 'moviesData'
  }
);

moviesDataSchema.plugin(timestamps);

moviesData = mongoose.model('moviesData', moviesDataSchema);