const Item = require('../models/item.model');

exports.itemCreate = (req, res) => {
    let item = new Item(
        {
            number: req.body.number,
            name: req.body.name,
        }
    );

    item.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Created successfully!');
    });
};

exports.itemDetails = (req, res) => {
    Item.findById(req.params.id, (err, item) => {
        if (err) return next(err);
        res.send(item);
    });
};

exports.itemUpdate = (req, res) => {
    Item.findOneAndUpdate(req.params.id, { $set: req.body }, (err, item) => {
        if (err) return next(err);
        res.send('Updated successfully!');
    });
};

exports.itemDelete = (req, res) => {
    Item.findOneAndDelete(req.params.id, { $set: req.body }, (err, item) => {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};
