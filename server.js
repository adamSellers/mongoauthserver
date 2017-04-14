var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

//for local .env support
require('dotenv').config();


var databaseConfig = require('./config/database');
var router = require('./app/routes');

//connect to the DB
mongoose.connect(databaseConfig.url);


app.listen(process.env.PORT || 8080);
console.log("App up on port 8080");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //Send JSON responses
app.use(logger('dev')); //Log requests to API using morgan
app.use(cors());

router(app);
