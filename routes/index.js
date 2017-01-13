var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Dashboard | MMFF Movies',
    navBarTitle: 'Dashboard'
  });
});

module.exports = router;
