const Game = require('../models/games');

module.exports = {
	index,
	new: newGame,
	create,
	show,
	edit,
	update,
	delete: deleteGame,
}