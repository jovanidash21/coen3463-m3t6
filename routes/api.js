var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
    if (req.user === undefined) {
        res.json({});
    }
    else {
        res.json({
            user: req.user
        });
    }
});

module.exports = router;
