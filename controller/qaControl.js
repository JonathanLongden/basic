var qaCardModel = require('./../model/qaCardModel.js');
var userControl = require('./userControl');
module.exports = {
    create: function(req, res, next) {
        req.body._user = req.user._id;
        var sale = new qaCardModel(req.body);

        sale.save(function(err, result) {
            if (err) {
                res.send(err);
            }
            //add sale id to req
            req.id = result._id;
            //call userControl.addSale

            console.log(req.user);
            next();

        });
    },
    read: function(req, res) {
        qaCardModel
            .find(req.query)
            .exec(function(err, result) {
                if (err) {
                    res.send(err)
                }
                res.send(result)
            })
    },
    readById: function(req, res) {
        qaCardModel.findById(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err)
            }
            res.send(result)
        })
    },
    readByUser: function(req, res) {
        qaCardModel.find({ _user: req.user._id }).exec(function(err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result);
            }
        })
    },
    update: function(req, res) {
        qaCardModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res, next) {
        qaCardModel.findByIdAndRemove(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            req._user = result._user;
            next()
                //res.send(result);
        })
    }
}