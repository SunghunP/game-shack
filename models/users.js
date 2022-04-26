// dependencies
const mongoose = require('../config/db');
const Game = require('./games');
const gameSchema = mongoose.model('Game').schema;

const { Schema, model } = mongoose;

const userSchema = new Schema({
	username:	{ type: String, required: true, unique: true },
	password:   { type: String, required: true },
	gameLibrary: [gameSchema]
});

// store the model in mongoose
const User = mongoose.model('User', userSchema);

// export model
module.exports = User;