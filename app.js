/* -+-+-+---------------------------------------+-+-+-
* Main Imports
-+-+-+---------------------------------------+-+-+- */

const express = require('express');
const routes = require('./routes/index');
const books = require('./routes/books');
const patrons = require('./routes/patrons');

const app = express();

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.use('/', routes);
app.use('/books', books);
app.use('/patrons', patrons);

module.exports = app;