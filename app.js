const express = require('express');
const bodyParses = require('body-parser');
const item = require('./routes/item.route');
const app = express();

app.use('/items', item);

app.listen(3000, () => {
    console.log('Server is up and running.');
});
