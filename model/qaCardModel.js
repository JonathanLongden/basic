var mongoose = require('mongoose');

var QaSchema = new mongoose.Schema({
    _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    riskObservationDate: { type: Date, default: Date.now() },
    riskReportedBy: { type: String },
    riskCategory: { type: String },
    riskDescription: { type: String },
    riskMitigration: { type: String }

})

module.exports = mongoose.model("qacard", QaSchema);