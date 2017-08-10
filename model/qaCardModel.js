var mongoose = require('mongoose');

var QaSchema = new mongoose.Schema({
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    riskObservationDate: { type: Date },
    riskReportedBy: { type: String },
    riskCategory: { type: String },
    riskDescription: { type: String },
    riskMitigration: { type: String }

})

module.exports = mongoose.model("QaCard", QaSchema);

// var saleSchema = new mongoose.Schema({
// 	name: {type:String},
//   	address: {type:String},
//   	lat: {type:Number},
//   	lng: {type:Number},
//   	startDate: {type:Date},
//   	endDate: {type:Date},
//   	comment: {type:String},
//   	date:{type:Date, default:'8/1/2016'}

// });
// module.exports = saleSchema

// var SaleSchema = new mongoose.Schema({
//   _user : { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//   name: {type:String},
//   address: {type:String},
//   lat: {type:Number},
//   lng: {type:Number},
//   date:{type:Date, default:Date.now()},
//   comment: {type:String}
// })

// module.exports = mongoose.model("Sale", SaleSchema);