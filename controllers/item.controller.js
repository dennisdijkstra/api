const Item = require('../models/item.model');

exports.itemCreate = function (req, res) {
    let item = new Item(
        {
            id: req.body.id,
            name: req.body.name,
        }
    );

    item.save(function(err){
        if (err) {
            return next(err);
        }
        res.send('Item created successfully.');
    });
};
