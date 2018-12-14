const express = require('express');
const bodyParses = require('body-parser');

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
