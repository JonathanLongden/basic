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
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

// var userControl = require('./controller/userControl.js');
// var saleControl = require('./controller/saleControl.js');
// var qcCard = require();


app.post('/login', userControl.login); //logining in
app.post('/signup', userControl.signup); //signing up
app.get('/logout', userControl.logout);	//logging out
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


app.get('/users', userControl.getAllUsers);
app.get('/user/:id', userControl.getOneUser);
app.put('/user/:id', userControl.update);
app.post('/sale/:id', userControl.addSale);
// app.put('/sale/:id', userControl.updateSale);

//When sale is created, add sale id to user sale array
app.post('/sale', saleControl.create, userControl.addSale );
app.get('/sale', saleControl.read);
app.get('/sale/:id', saleControl.readById);
app.get('/mysales', saleControl.readByUser);
app.put('/sale/:id', saleControl.update );
app.delete('/sale/:id', saleControl.delete, userControl.deleteSale);


app.get('/sales', saleControl.read );
app.post('/sales', saleControl.create);
app.get('/sales:id',saleControl.readById);
app.put('/sales:id',saleControl.update);



// mongoose.connect(
//   //"mongodb://localhost:27017/sales"
// 	config.mongolab_uri
// );

// mongoose.connection.once('open', function(){
//   console.log('We have data');
// })

app.listen(config.port, function(){
  console.log('The server is on', config.port)
})
