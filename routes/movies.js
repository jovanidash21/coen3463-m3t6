var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('movies', { title: 'Movies | MMFF Movies' });
});

module.exports = router;
