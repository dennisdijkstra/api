const Item = require('../models/item.model');

exports.itemCreate = function (req, res) {
    let item = new Item(
        {
            number: req.body.number,
            name: req.body.name,
        }
    );

    item.save(function(err){
        if (err) {
            return next(err);
        }
        res.send('Created successfully!');
    });
};

exports.itemDetails = function (req, res) {
    Item.findById(req.params.id, function(err, item) {
        if (err) return next(err);
        res.send(item);
    });
};

exports.itemUpdate = function (req, res) {
    Item.findOneAndUpdate(req.params.id, { $set: req.body }, function(err, item) {
        if (err) return next(err);
        res.send('Updated successfully!');
    });
};

exports.itemDelete = function (req, res) {
    Item.findOneAndDelete(req.params.id, { $set: req.body }, function(err, item) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};
