const Item = require('../models/item.model');

exports.itemCreate = (req, res) => {
    const newItem = new Item({
        number: req.body.number,
        name: req.body.name,
    });

    newItem.save().then(item => res.json(item));
};

exports.items = (req, res) => {
    Item.find()
        .then(items => res.json(items));
};

exports.itemDetails = (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(() => res.status(404).json({ success: false }));
};

exports.itemUpdate = (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.update(req.body).then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
};

exports.itemDelete = (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
};
