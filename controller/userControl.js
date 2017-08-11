var UserModel = require('./../model/userModel');
var passport = require('passport'); //passort
var LocalStrategy = require('passport-local').Strategy; //passport
var FacebookStrategy = require('passport-facebook').Strategy; //passport
var mongoose = require('mongoose');
// var crypto = require('crypto'); //password reset
// var async = require('async'); //password reset
// var nodemailer = require('nodemailer');
// var sgTransport = require('nodemailer-sendgrid-transport');
// var sendgrid  = require('sendgrid');
// var options = {
// 	auth: {
// 		api_key: ''
// 	}
// };
// var mailer = nodemailer.createTransport(sgTransport(options));



module.exports = {

    login: function(req, res, next) {
        passport.authenticate('local-login', function(err, user, info) {
            if (err) { return next(err); }
            if (!user) { return res.json({ message: "Please enter your Email & Password " }) } //{ return res.status(404).json(info.message) }
            req.login(user, function(err) {
                if (err) { return next(err); }
                console.log(req.user);
                return res.json({ message: 'You logged in like a champ!', user: user });
            });
        })(req, res, next);

    },

    signup: function(req, res, next) {
        passport.authenticate('local-signup', function(err, user, info) {
            //console.log('You signed up.', info);
            if (err) { return next(err); }
            if (!user) { return res.json({ message: "Please enter a Email & Password " }) } //{ return res.status(404).json(info.message); }
            req.login(user, function(err) {
                if (err) { return next(err); }
                return res.json({ message: 'You signed up like a champ!', user: user });
            })
        })(req, res, next);
    },
    // facebook login works,
    // loginfacebook: function(req, res, next){
    // 	passport.authenticate('facebook', function(err, user, info){
    // 		// console.log(this);
    // 		if(err) { return next(err); }
    // 		if(!user) { return res.status(404).json(info.message) }
    // 		req.login(user, function(err){
    // 			if(err) { return next(err); }
    // 			return res.json({ message: 'You logged into FaceBook like a champ!', user: user });
    // 		});
    // 	})(req, res, next);
    // },
    update: function(req, res, next) {

        UserModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    logout: function(req, res, next) {
        req.session.destroy();
        req.logout();
        //res.redirect('/');
        res.json({ message: 'You logged out like a champ!' });
        console.log("Signout");

    },

    delete: function(req, res, next) {
        UserModel.findByIdAndRemove(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },

    getAllUsers: function(req, res) {
        UserModel.find().populate('card').exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    },
    getOneUser: function(req, res) {
        if (req.user) {
            console.log(req.user)
            UserModel.findById({
                    _id: req.user._id
                },
                function(err, user) {
                    if (err) {
                        return console.log(err);
                    } else {
                        res.json(user)
                    }
                });
        } else {
            res.json({
                user: "anonymous"
            })
        }

    },
    addqacard: function(req, res) {
        console.log(req.id);
        UserModel.findByIdAndUpdate(
            req.user._id, { $push: { "card": req.id } }, { safe: true, upsert: true },
            function(err, model) {
                if (err) console.log(err);
                res.send(model);
            }
        )
    },
    deleteqacard: function(req, res) {
        console.log()
        UserModel.findOne({ _id: req._user }, function(err, user) {
            if (err) {
                console.log(err);
            }
            var index = user.qacard.indexOf(req.body._id);
            user.qacard.splice(index, 1);
            user.save(function(error) {
                if (error) {
                    console.log(err)
                } else {
                    res.send(req.body);
                }
            })
        })
    },
    // forgot: function(req, res, next) {
    // 	  async.waterfall([
    // 	    function(done) {
    // 	      crypto.randomBytes(20, function(err, buf) {
    // 	        var token = buf.toString('hex');
    // 	        done(err, token);
    // 	      });
    // 	    },
    // 	    function(token, done) {
    // 	      UserModel.findOne({ 'local.userName' : req.body.userName }, function(err, user) {
    // 	         if (!user) {
    // 	          req.flash('error', 'No account with that email address exists.');
    // 	          return res.redirect('/forgot');
    // 	        }

    // 	        user.resetPasswordToken = token;
    // 	        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    // 	        user.save(function(err) {
    // 	          done(err, token, user);
    // 	        });
    // 	      });
    // 	    },
    // 	    function(token, user, done) {
    // 		    var mailOptions = {
    // 		        to: user.local.userName,
    // 		        from: 'passwordreset@yardsailrs.info',
    // 		        subject: 'Demo Password Reset',
    // 		        text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
    // 		      	'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
    // 		      	'http://' + req.headers.host + '/reset/' + token + '\n\n' +
    // 		      	'If you did not request this, please ignore this Email and your password will remain unchanged.\n'
    // 	      };
    // 	      mailer.sendMail(mailOptions, function(err, json) {
    // 	        req.flash('info', 'An e-mail has been sent to ' + user.local.userName + ' with further instructions. Please follow the instructions and complete reset within the hour.');
    // 	        done(err, 'done');
    // 	      });
    // 	    }
    // 	  ], function(err) {
    // 	    if (err) return next(err);
    // 	    res.redirect('/forgot');
    // 	  });
    // 	}




}