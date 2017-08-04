var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;
// var User = null; //require('./../model/userModel.js');
// var configAuth = require('./auth.js');



module.exports = function(passport) { //call in passport as a parameter

    passport.serializeUser(function(user, done) { //serialize user and passport stores information about the login and session of the user
        console.log("USER", user);
        done(null, user.id); //sets info to id
    });
    passport.deserializeUser(function(id, done) { //deserializes to return user information after it has been serialized in a language that makes sense to us.
        console.log("ID", id);
        User.findById(id, function(err, user) { //searches for info by id
            done(err, user);
        });
    });

    passport.use('local-login', new LocalStrategy({
            usernameField: 'userName',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, userName, password, done) {
            User.findOne({ 'local.userName': userName }, function(err, user) {
                if (err)
                    return done(err);
                if (!user)
                    return done(null, false, { message: 'We could not find your User ID' });
                if (!user.validPassword(password))
                    return done(null, false, { message: 'Wrong password. Try again.' });
                return done(null, user, { message: 'You logged in successfully' });
            });
        }));

    passport.use('local-signup', new LocalStrategy({ //use local-signup
            usernameField: 'userName', //this can be username, email, anything as long as you update all other instances of email on this file.
            passwordField: 'password',
            passReqToCallback: true //this makes its so we only need one callback function below
        },
        function(req, userName, password, done) {
            process.nextTick(function() { //waits until all previous code has completed then runs callback function. This is a node function.
                User.findOne({ 'local.userName': userName }, function(err, user) { //find by email mongoose function
                    if (err) return done(err);
                    if (user) {
                        if (user.validPassword(password)) {
                            console.log('Login Success!');
                            return done(null, user);
                        } else {
                            console.log('Invalid userName or password');
                            return done(null, false);
                        }
                    } else { //otherwise, make a new user
                        var newUser = new User(req.body);
                        newUser.local.userName = userName;
                        newUser.local.password = newUser.generateHash(password); //hash password
                        // newUser.username = req.body.username;
                        // newUser.role = 'guest';
                        console.log(newUser);
                        newUser.save(function(err) { //save to mongo
                            if (err) throw err;
                            return done(null, newUser, { message: 'You successfully signed up.' });
                        });
                    }
                });
            });
        }));

    // Facebook login, works at this current time
    // passport.use(new FacebookStrategy({
    //     clientID: configAuth.facebookAuth.clientID,
    //     clientSecret: configAuth.facebookAuth.clientSecret,
    //     callbackURL: configAuth.facebookAuth.callbackURL,
    //     profileFields: ["emails" , "displayName", "name", "picture.type(large)", "gender", "birthday"]
    //     },
    //     function(accessToken, refreshToken, profile, done){
    //           process.nextTick(function(){User.findOne({'facebook.id': profile.id}, 
    //             function(err, user){ if(err) return done(err); if(user) return done(null, user); else {
    //                   var newUser = new User();
    //                   console.log(profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg');
    //                   //set all of the face information in our user model
    //                   newUser.facebook.id = profile.id;
    //                   newUser.facebook.took = accessToken;
    //                   newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
    //                   newUser.facebook.gender = profile.gender;
    //                   newUser.facebook.birthday = profile.birthday;
    //                   newUser.facebook.picture = profile.photos ? profile.photos[0].value : '/img/faces/unknown-user-pic.jpg';

    //               newUser.save(function(err){
    //                 if(err)
    //                   throw err;
    //                 return done(null, newUser);
    //               })
    //               return done( null,  newUser);
    //               console.log(profile);
    //         };

    //       });
    //     });
    // }));

};