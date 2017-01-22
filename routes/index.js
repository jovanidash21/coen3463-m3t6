var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
    if(req.user){
        moviesData.find()
            .then(function(moviesData) {
                res.render('index', {
                    user: req.user,
                    title: 'Dashboard | MMFF Movies',
                    navBarTitle: 'Dashboard',
                    moviesData: moviesData
                });
            });
    }
    else{
        res.redirect('/login');
    }
});

router.get('/login', function(req, res, next) {
    if(req.user){
        res.redirect('/');
    }
    else{
        res.render('login', {
            title: 'Login | MMFF Movies'
        });
    }
});

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}), function(req, res, next) {
    res.redirect('/');
});

router.post('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
});

module.exports = router;
