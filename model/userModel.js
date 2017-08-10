var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var Sales = ('./saleModel.js')

var bcrypt = require('bcrypt-nodejs'); //encrypts the password


var UserSchema = new Schema({

    local: {
        userName: { type: String, unique: true },
        password: String
    },
    role: {
        type: String,
        required: false,
        default: 'User'
    },
    loggedin: {
        type: Boolean
    },
    qacard: [{ type: Schema.Types.ObjectId, ref: 'QaCard' }]
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null); //encrypts password and does so 8 times. Default is 10. More encryptions means more time to process
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password); //compares the given password with the encrypted stored password
};


module.exports = mongoose.model('User', UserSchema);