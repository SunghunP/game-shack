const mongoose = require('mongoose');

// destructuring
const { Schema, model } = mongoose;

const gameSchema = new Schema({
	name:	{ type: String, required: true, unique: true },
	desc:   { type: String, maxLength: 500 },
	img: 	{ type: String }, // will provide a blank image if none is entered
	price: 	{ type: Number, required: true, min: [0, 'The price must be greater than 0!']},
	qty: 	{ type: Number, required: true, min: [0, 'The quantity must be a positive number!']},
	tags: 	[String]
});

// store model in mongoose
const Game = mongoose.model('Game', gameSchema)

// export the model 
module.exports = Game;