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

async function index(req, res) {
	try {
		let gameDocuments = await Game.find({});
		res.render('game_index.ejs', {
			games: gameDocuments
		});
	} catch(err) {
		res.send(err)
	}
};

