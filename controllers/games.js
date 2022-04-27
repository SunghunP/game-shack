const res = require('express/lib/response');
const Game = require('../models/games');
const gameSeed = require('../models/seed/gameSeed');

module.exports = {
	index,
	seed,
	new: newGame,
	// create,
	show,
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

async function newGame(req, res) {
	try {
		await res.render('./games/game_new.ejs')
	} catch(err) {
		res.send(err)
	}
}

async function create() {

}

async function show(req, res) {
	try {
		let foundGame = await Game.findById(req.params.id);
		res.render('./games/game_show.ejs', {game : foundGame});
	} catch(err) {
		res.send(err)
	}
}
