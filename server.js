const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const item = require('./routes/item.route');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected ..'))
    .catch(err => console.log(err));

const port = process.env.PORT || 3000;

app.use('/items', item);
app.listen(port, () => console.log(`Server is up and running on port ${port}`));
