// npm init -y, npm i express
// "start": "node server.js"

'use strict';

const PORT = process.env.PORT || 3001;
const express = require('express');

const app = express();
app.use(express.static('./public'));

app.listen(PORT, () => {
  console.log('Server is running!');
});
