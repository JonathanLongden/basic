var express = require('express');
//var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var config = require('./config.js');

//var nodemailer = require('nodemailer'); //password reset
//var sgTransport = require('nodemailer-sendgrid-transport'); //password reset
//var sendgrid  = require('sendgrid'); //password reset
//var User = require('./model/userModel'); // password reset
//var engine = require('consolidate'); //password reset && view controll

// 	auth: {
// 		key is needed
// 	}
// };
// var mailer = nodemailer.createTransport(sgTransport(options));

var passport = require('passport');

var configSession = require('./passport/setsecret.js');

require('./passport/passport.js')(passport);


var app = express();

//app.use(cors);

app.use(session(configSession));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));





var qcCard = null; //require();

app.listen(config.port, function() {
    var port = config.port;
    console.log('The server is on', port);

});
//127.0.0.1:3000