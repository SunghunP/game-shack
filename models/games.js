const mongoose = require('mongoose');

const gameSchema = new Schema({
	name:	{ type: String, required: true, unique: true },
	desc:   { type: String, required: true, default: `Description of ${this.name}`},
	img: 	{ type: String }, // will provide a blank image if none is entered
	price: 	{ type: number, required: true, min: [0, 'The price must be greater than 0!']},
	qty: 	{ type: number, required: true, min: [0, 'The quantity must be a positive number!']},
	tags: 	{ type: Array }
});

module.exports = mongoose.model('Game', gameSchema);