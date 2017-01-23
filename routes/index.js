var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', function(req, res, next) {
    if(req.user){
        moviesData.find().sort({year: -1, title: 1})
            .then(function(moviesData) {
                res.render('index', {
                    user: req.user,
                    title: 'Dashboard | MMFF Movies',
                    navBarTitle: 'Dashboard',
                    moviesData: moviesData,
                    alertMessage: req.flash('alertMessage')
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
            title: 'Login | MMFF Movies',
            alertMessage: req.flash('alertMessage')
        });
    }
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user) {
        if(!err){
            if(!user){
                req.flash('alertMessage', 'Invalid username or password!');
                res.redirect('/login');
            }
            else{
                req.logIn(user, function(err) {
                    if(!err){
                        res.redirect('/');
                    }
                    else{
                        res.end(err);
                    }
                })
            }
        }
        else {
            res.end(err);
        }
    })(req, res, next);
});

router.post('/logout', function(req, res){
    req.logout();
    res.redirect('/login');
});

module.exports = router;
