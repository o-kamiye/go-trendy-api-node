
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const mongoose = require('mongoose');

const Category = require('./app/models/Category');

mongoose.Promise = global.Promise;

mongoose.connect(db.url);

const app = express();

const port = process.env.PORT || 8000;

const routes = require('./app/routes');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use((req, res) => {
	res.status(404).send({url: req.get('host') + req.originalUrl + " not found" });
});

routes(app);

app.listen(port, () => {
	console.log("We're live on " + port);
});


