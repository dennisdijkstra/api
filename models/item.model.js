const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('Item', ItemSchema);
