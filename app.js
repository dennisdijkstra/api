require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const item = require('./routes/item.route');
const app = express();
const mongoDB = process.env.DB_URI;

mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/items', item);

app.listen(3000, () => {
    console.log('Server is up and running.');
});
