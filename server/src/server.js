import path from 'path';
import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config';

const MONGO_URI = config.mongodb_uri

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI);
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error))

// imports
const indexRoutes = require('./routes/index')
const apiRoutes = require('./api/index')

// create express app
const app = express()

// view engine
app.set('view engine', 'html')
app.engine('html', function(path, options, callbacks) {
  fs.readFile(path, 'utf-8', callback)
})

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/build')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// routes
app.use('/', indexRoutes)
app.use('/api', apiRoutes)

// error handling
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
})

app.listen(config.port, function () {
  console.log('running at localhost:' + config.port)
})
