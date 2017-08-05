const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport'); //local auth
const session = require('express-session'); //session
const favicon = require('serve-favicon');
var path = require('path');
var finalhandler = require('finalhandler');
var http = require('http');


const app = express();
const config = require('./config.js');



var configSession = require('./passport/setsecret.js');

require('./passport/passport.js')(passport);
//require('./config/passport')(passport);//self invokes passport


app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
}));

// app.use(passport.initialize());
// app.use(passport.session());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
    // app.use(express.static(__dirname + '/public'));
app.get('/favicon.ico', function(req, res) {
    res.status(204);
});






var qcCard = null; //require();
var port = process.env.PORT || 8000;
//config.port
app.listen(port, function() {
        console.log('The server is on', port)

    })
    //127.0.0.1:3000