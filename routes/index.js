var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  moviesData.find()
      .then(function(moviesData) {
        res.render('index', {
          title: 'Dashboard | MMFF Movies',
          navBarTitle: 'Dashboard',
          moviesData: moviesData
        });
      });
});

module.exports = router;
