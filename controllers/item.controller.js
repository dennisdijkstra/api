const Item = require('../models/Item');

exports.items = (req, res) => {
    Item.find()
        .then(items => res.json(items));
};

exports.itemCreate = (req, res) => {
    const newItem = new Item({
        name: req.body.name,
    });

    newItem.save()
        .then(item => res.json(item));
};

exports.itemDetails = (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(() => res.status(404).json({ success: false }));
};

exports.itemUpdate = (req, res) => {
    Item.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { name: req.body.name } },
        { new: true },
    )
        .then(item => res.json(item))
        .catch(() => res.status(404).json({ success: false }));
};

exports.itemDelete = (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(() => res.status(404).json({ success: false }));
};
