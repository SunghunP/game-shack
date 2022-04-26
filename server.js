// ----------------------------- //
// Dependencies
// ----------------------------- //
require('dotenv').config();
require('./config/db/');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const PORT = process.env.PORT;

// ----------------------------- //
// Middleware
// ----------------------------- //
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended:false}));

// ----------------------------- //
// Routes
// ----------------------------- //
const indexRouter = require('./routes/index');
const gameRouter = require('./routes/game.js');

app.listen(PORT, () => {
	console.log('Server has started on PORT: ', PORT);
});