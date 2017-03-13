
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const mongoose = require('mongoose');
const models = require('./app/models');
const routes = require('./app/routes');
const app = express();
const port = process.env.PORT || 8000;

mongoose.Promise = global.Promise;

mongoose.connect(db.url);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

routes(app);

app.use((req, res) => {
	res.status(404).send({url: req.get('host') + req.originalUrl + " not found" });
});

app.listen(port, () => {
	console.log("We're live on " + port);
});


