const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const item = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected ..'))
    .catch(err => console.log(err));

// Use Routes
app.use('/api/items', item);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is up and running on port ${port}`));
