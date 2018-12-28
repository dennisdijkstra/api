const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
});

module.exports = mongoose.model('Item', ItemSchema);
