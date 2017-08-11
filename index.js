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

var userControl = require('./controller/userControl.js');
var cardControl = require('./controller/cardControl.js')

//POST -- Create
//GET  -- Read
//PUT  -- Update/Replace
//Patch -- Update/Modify
//Delete -- Delete

app.post('/login', userControl.login); //logining in
app.post('/signup', userControl.signup); //signing up
app.get('/logout', userControl.logout); //logging out
// app.post('/forgot', userControl.forogt) //password reset

app.get('/users', userControl.getAllUsers);
app.get('/user', userControl.getOneUser);
app.get('/user/:id', userControl.getOneUser);
app.put('/user/:id', userControl.update);
// app.post('/sale/:id', userControl.addqacard);
// app.put('/sale/:id', userControl.updateSale);

//When sale is created, add sale id to user sale array
app.post('/card', cardControl.create, userControl.addqacard, ); //Creating card that tieing to User
app.get('/card', cardControl.read);
// app.get('/qacard/:id', cardControl.readById);
// app.get('/mysales', cardControl.readByUser);
// app.put('/qacard/:id', cardControl.update);
// app.delete('/qacard/:id', cardControl.delete, userControl.deleteqacard);


// app.get('/qacard', cardControl.read);
// app.post('/card', cardControl.create);
// app.get('/qacard:id', cardControl.readById);
// app.put('/qacard:id', cardControl.update);

mongoose.connect(
    //"mongodb://localhost:27017/sales"
    config.mongolab_uri
);

mongoose.connection.once('open', function() {
    console.log('We have data');
});




app.listen(config.port, function() {
    var port = config.port;
    console.log('The server is on', port);

});
//127.0.0.1:3000