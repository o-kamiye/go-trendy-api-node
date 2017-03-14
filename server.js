"use strict";


const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const morgan = require('morgan');
const models = require('./app/models');
const routes = require('./app/routes');
const protectedRoutes = require('./app/routes/protected');
const app = express();
const expressRouter = express.Router();
const port = process.env.PORT || 8000;

const jwt = require('jsonwebtoken');

// app.use('/categories', jwtCheck);

app.set('secret', config.token.jwt_secret);

mongoose.Promise = global.Promise;

mongoose.connect(config.db.url);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.send("Go Trendy is Live!!! at " + req.get('host'));
});

// setup to create sample user to test jwt
// app.get('/setup', (req, res) => {
// 	let User = mongoose.model('User');
// 	const Kam = new User({
// 		username: "kamiye",
// 		password: "sensei"
// 	});
// 	Kam.save((err) => {
// 		if (err) throw err;
// 		console.log("Test user created successfully");
// 		res.json({success: true});
// 	});
// });

routes(app);

protectedRoutes(app);

app.use((req, res) => {
	res.status(404).send({url: req.get('host') + req.originalUrl + " not found" });
});

app.listen(port, () => {
	console.log("We're live on " + port);
});
