const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport'); //local auth
const session = require('express-session'); //session

const app = express();


// const express = require('express');
// //var cors = require('cors');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const session = require('express-session');
const config = require('./config.js');
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
app.use(express.static(__dirname + '/public'));

//app.use(cors);
// app.use(session(configSession));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // parse application/x-www-form-urlencoded 
// app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(__dirname + '/public'));

// parse application/json 
app.use(bodyParser.json())

//   app.use(express.logger('dev'));
//   app.use(gzippo.staticGzip("" + __dirname + "/dist"));


// var userControl = require('./controller/userControl.js');
// var saleControl = require('./controller/saleControl.js');
var qcCard = null; //require();


// app.post('/login', userControl.login); //logining in
// app.post('/signup', userControl.signup); //signing up
// app.get('/logout', userControl.logout);	//logging out
// app.post('/forgot', userControl.forogt) //password reset


// facebook login that works currently still
// app.get('/auth/facebook', userControl.loginfacebook);
// app.get('/auth/facebook', userControl.loginfacebook);
// app.get("/auth/facebook/callback", passport.authenticate('facebook', {
// 		successRedirect: "/",
// 		failureRedirect: "/logout"
// }), function(req, res){
// 	console.log(req.sesion);
// });


// app.get('/users', userControl.getAllUsers);
// app.get('/user/:id', userControl.getOneUser);
// app.put('/user/:id', userControl.update);
// app.post('/sale/:id', userControl.addSale);
// // app.put('/sale/:id', userControl.updateSale);

// //When sale is created, add sale id to user sale array
// app.post('/sale', saleControl.create, userControl.addSale );
// app.get('/sale', saleControl.read);
// app.get('/sale/:id', saleControl.readById);
// app.get('/mysales', saleControl.readByUser);
// app.put('/sale/:id', saleControl.update );
// app.delete('/sale/:id', saleControl.delete, userControl.deleteSale);


// app.get('/sales', saleControl.read );
// app.post('/sales', saleControl.create);
// app.get('/sales:id',saleControl.readById);
// app.put('/sales:id',saleControl.update);



// mongoose.connect(
//     //"mongodb://localhost:27017/sales"
//     config.mongolab_uri
// );

// mongoose.connection.once('open', function() {
//     console.log('We have data')
// })
// mongoose.connect("mongodb://localhost:27017/usersNThings");
// mongoose.connection.once('open', function(){
//   console.log("connected to mongoDB");
// });

// app.listen(8000, function(){
//   console.log("listening on 8000");
// });

//app.listen(process.env.PORT || 8080);
app.listen(config.port, function() {
        console.log('The server is on', config.port)

    })
    //127.0.0.1:3000