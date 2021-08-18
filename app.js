var express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');


var app = express();

// view engine setup
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



app.listen(3000, async () => {
	console.log(`[INFO] : App listening at http://localhost:3000`);
});
