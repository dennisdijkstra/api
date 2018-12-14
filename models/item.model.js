const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ItemSchema = new Schema({
    number: { type: Number, required: true },
    name: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('Item', ItemSchema);
