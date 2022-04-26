// ----------------------------- //
// import dependencies
// ----------------------------- //
require('dotenv').config();
const mongoose = require('mongoose');
const DATABASE_URL = process.env.DATABASE_URL;

// connect to the database
mongoose.connect(DATABASE_URL);

// shortcut to mongoose connection object
const db = mongoose.connection;

db
	.on('connected', () => {console.log(`Connected at ${db.host}:${db.port}`)})
	.on('disconnected', () => {console.log('Mongoose has disconnected from the Database...')})
	.on('error', (error) => {console.log(error)});