// ----------------------------- //
// Dependencies
// ----------------------------- //
require('dotenv').config();
require('./config/db');
const express = require('express');
const methodOverride = require('method-override');
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT;

// ----------------------------- //
// Middleware
// ----------------------------- //
app.use(express.urlencoded({extended:false})); // parses url encoded bodies
app.use(methodOverride('_method')); // bypass route types
app.use(express.static('public')); // create a path for public files to exist/be found 
app.use(morgan("dev")); // log every HTTP request

// ----------------------------- //
// Routes
// ----------------------------- //
const indexRouter = require('./routes/index');
const gameRouter = require('./routes/games.js');

app.listen(PORT, () => {
	console.log('Server has started on PORT: ', PORT);
});