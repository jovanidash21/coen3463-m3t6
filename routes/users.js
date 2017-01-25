var express = require('express');
var router = express.Router();
var moment = require('moment');

var profileImage;

router.get('/', function(req, res, next) {
    if(req.user){
        usersData.find()
            .then(function (usersData) {
                res.render('users', {
                    user: req.user,
                    title: 'Users | MMFF Movies',
                    navBarTitle: 'Users',
                    usersData: usersData,
                    moment: moment,
                    alertMessage: req.flash('alertMessage')
                });
            });
    }
    else{
        res.redirect('/login');
    }
});

router.get('/add', function(req, res, next) {
    if(req.user){
        res.render('users-add', {
            user: req.user,
            title: 'Add New User | MMFF Movies',
            navBarTitle: 'Add New User'
        });
    }
    else{
        res.redirect('/login');
    }
});

router.post('/add', function(req, res, next) {
    if (req.body.profileImage.length == 0) {
        profileImage = '/images/profile_images/default.png';
    }
    else{
        profileImage = req.body.profileImage;
    }

    var user = {
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        website: req.body.website,
        profileImage: profileImage
    };
    usersData.register(new usersData(user), req.body.confirmPassword, function(err) {
        if(!err){
            req.flash('alertMessage', 'New User Added!');
            res.redirect('/users');
        }
        else
        {
            res.render('users-add', {
                user: req.user,
                title: 'Add New User | MMFF Movies',
                navBarTitle: 'Add New User',
                alertMessage: 'Sorry! User not registered because the username already exists. Please try again',
                postError: true
            });
        }
    });
});

router.get('/:username', function(req, res, next) {
    if(req.user){
        var username = req.params.username;
        usersData.findOne({username: username}, function (err, userData) {
            if (!err) {
                res.render('users-profile', {
                    user: req.user,
                    title: 'User Profile | MMFF Movies',
                    navBarTitle: 'User Profile',
                    userData: userData,
                    moment: moment
                });
            }
            else {
                res.end(err);
            }
        });
    }
    else{
        res.redirect('/login');
    }
});

router.get('/:username/edit', function(req, res, next) {
    if(req.user){
        var username = req.params.username;
        usersData.findOne({username: username}, function (err, userData) {
            if (!err) {
                res.render('users-edit', {
                    user: req.user,
                    title: 'Update User | MMFF Movies',
                    navBarTitle: 'Update User',
                    userData: userData,
                    moment: moment
                });
            }
            else {
                res.end(err);
            }
        });
    }
    else{
        res.redirect('/login');
    }
});

router.post('/:username/edit', function(req, res, next) {
    var username = req.params.username;

    if (req.body.profileImage.length == 0) {
        profileImage = '/images/profile_images/default.png';
    }
    else{
        profileImage = req.body.profileImage;
    }

    usersData.findOne({username: username}, function(err, userData) {
        if(!err){
            userData.username = req.body.username;
            userData.firstName = req.body.firstName;
            userData.lastName = req.body.lastName;
            userData.email= req.body.email;
            userData.website = req.body.website;
            userData.profileImage = profileImage;
            if(req.body.password.length > 0){
                userData.setPassword(req.body.password, function(){
                    userData.save();
                });
            }
            userData.save(function(err, userData){
                if(!err){
                    res.render('users-edit', {
                        user: req.user,
                        title: 'Edit User | MMFF Movies',
                        navBarTitle: 'Update User',
                        alertMessage: 'User Updated',
                        postError: false,
                        userData: userData,
                        moment: moment
                    });
                }
                else{
                    res.render('users-edit', {
                        user: req.user,
                        title: 'Edit User | MMFF Movies',
                        navBarTitle: 'Update User',
                        alertMessage: 'User Not Updated! Please Try Again',
                        postError: true,
                        userData: userData,
                        moment: moment
                    });
                }
            });
        }
        else {
            res.end(err);
        }
    });
});

router.post('/:username/delete', function(req, res, next) {
    var username = req.params.username;
    usersData.remove({username: username}, function(err){
        if(!err){
            req.flash('alertMessage', 'User Deleted!');
            res.redirect('/users');
        }
        else {
            res.end(err);
        }
    });
});

module.exports = router;