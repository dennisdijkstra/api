const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        requiered: true,
    },
    lastname: {
        type: String,
        requiered: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
    }],
});

module.exports = mongoose.model('User', UserSchema);
