var mongoose = require('mongoose');


var qaCard = new mongoose.Schema({

    riskObservationDate: { type: Date, default: '01/01/1990' },
    riskReportedBy: { type: String },
    riskCategory: { type: String },
    riskDescription: { type: String },
    riskMitigration: { type: String }

});

module.exports = qaCard