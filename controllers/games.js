const res = require('express/lib/response');
const Game = require('../models/games');
const gameSeed = require('../models/seed/gameSeed');

module.exports = {
	index,
	seed,
	new: newGame,
	create,
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
		await Game.create(gameSeed);
		res.redirect('/games');
	} catch(err) {
		res.send(err);
	}
}

async function newGame(req, res) {
	try {
		await res.render('./games/game_new.ejs');
	} catch(err) {
		res.send(err);
	};
};

async function create(req, res) {
	// get tags from req.body to validate and clean data
	let tagString = req.body.tags;
	// replace all white spaces with blank string
	tagString = tagString.replace(/\s/g,'')
	// create an array by splitting the string by ,
	const tags = tagString.split(',') ;
	req.body.tags = tags
	try {
		let game = await Game.create(req.body);
		res.redirect(`/games/${game._id}`)
	} catch(err) {
		res.send(err)
	}
}

async function show(req, res) {
	try {
		let foundGame = await Game.findById(req.params.id);
		res.render('./games/game_show.ejs', {game : foundGame});
	} catch(err) {
		res.send(err)
	}
}
