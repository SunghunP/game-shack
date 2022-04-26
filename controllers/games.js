const Game = require('../models/games');
const gameSeed = require('../models/seed/gameSeed');

module.exports = {
	index,
	seed,
	// new: newGame,
	// create,
	// show,
	// edit,
	// update,
	// delete: deleteGame,
};

// GET the index page of the games
async function index(req, res) {
	try {
		let gameDocuments = await Game.find({});
		res.render('./games/game_index.ejs', {
			games: gameDocuments
		});
	} catch(err) {
		res.send(err);
	}
};

// WARNING: the seed route wil destroy all data in the database!
async function seed(req, res) {
	try {
		// first delete all of the models in the database
		await Game.deleteMany({});
		// then push the seed data to the db 
		await Game.create(gameSeed)
		res.redirect('/games');
	} catch(err) {
		res.send(err);
	}
}
