var mongoose = require('mongoose');


var saleSchema = new mongoose.Schema({
	name: {type:String},
  	address: {type:String},
  	lat: {type:Number},
  	lng: {type:Number},
  	startDate: {type:Date},
  	endDate: {type:Date},
  	comment: {type:String},
  	date:{type:Date, default:'8/1/2016'}

});

module.exports = saleSchema