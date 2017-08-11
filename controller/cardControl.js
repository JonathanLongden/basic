var cardModel = require('./../model/cardModel.js');
var userControl = require('./userControl');
module.exports = {
    create: function(req, res, next) {
        req.body._user = req.user._id;
        var card = new cardModel(req.body);

        card.save(function(err, res) {
            if (err) {
                res.send(err);
            } else {
                //add card id to req
                req.id = res._id;
                //call userControl.addSale
                console.log(res)
                console.log(req.id)
                console.log(req)
                console.log(req.user);
                // next();//was here before
                //req.send()
                //res.send(result)
                //next(req);
            }
        });
    },
    //Added this for a demo
    createbyself: function(req, res, next) {
        var card = new cardModel(req.body);
        card.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    read: function(req, res) {
        cardModel
            .find(req.query)
            .exec(function(err, result) {
                if (err) {
                    res.send(err)
                }
                res.send(result)
            })
    },
    readById: function(req, res) {
        cardModel.findById(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err)
            }
            res.send(result)
        })
    },
    readByUser: function(req, res) {
        cardModel.find({ _user: req.user._id }).exec(function(err, result) {
            if (err) {
                res.send(err)
            } else {
                res.send(result);
            }
        })
    },
    update: function(req, res) {
        cardModel.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            res.send(result);
        })
    },
    delete: function(req, res, next) {
        cardModel.findByIdAndRemove(req.params.id, req.body, function(err, result) {
            if (err) {
                res.send(err);
            }
            req._user = result._user;
            next()
                //res.send(result);
        })
    }
}