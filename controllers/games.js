const res = require('express/lib/response');
const Game = require('../models/games');
const gameSeed = require('../models/seed/gameSeed');

module.exports = {
	index,
	seed,
	new: newGame,
	create,
	show,
	edit,
	update,
	delete: deleteGame,
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
};

async function newGame(req, res) {
	try {
		await res.render('./games/game_new.ejs');
	} catch(err) {
		res.send(err);
	};
};

async function create(req, res) {
	req.body.tags = trimWhiteSpaceAndSplit(req.body.tags);
	try {
		let game = await Game.create(req.body);
		res.redirect(`/games/${game._id}`);
	} catch(err) {
		res.send(err);
	}
};

async function show(req, res) {
	try {
		let foundGame = await Game.findById(req.params.id);
		res.render('./games/game_show.ejs', {game : foundGame});
	} catch(err) {
		res.send(err);
	}
};

async function edit(req, res) {
	try {
		let game = await Game.findById(req.params.id);
		res.render('./games/game_edit.ejs', {game});
	} catch(err) {
		res.send(err);
	}
};

async function update(req, res) {
	console.log(req.body);
	const id = req.params.id;
	const finalQty = parseInt(req.body.gameQty) - parseInt(req.body.qty);
	// check to see if the body has 2 key:value pairs
	if (Object.keys(req.body).length === 2) {
		try {
			Game.findByIdAndUpdate(
				id,
				{ 'qty': finalQty },
				(err, updatedGame) => {
					res.redirect(`/games/${id}`);
				}
			);
		} catch(err) {
			res.send(err)
		}
	} else {
		try {
			if (!req.body.img) req.body.img = '../images/no_Img.png'
			req.body.tags = trimWhiteSpaceAndSplit(req.body.tags);
			await Game.findByIdAndUpdate(req.params.id, req.body);
			res.redirect(`/games/${req.params.id}`);
		} catch(err) {
			res.send(err);
		}
	}


};

async function deleteGame(req, res) {
	try {
		await Game.findByIdAndDelete(req.params.id);
		res.redirect('/games')
	} catch(err) {
		res.send(err)
	}
};

function trimWhiteSpaceAndSplit(reqBody) {
	// get tags from req.body to validate and clean data
	let tagString = reqBody;
	// replace all white spaces with blank string
	tagString = tagString.replace(/\s/g,'');
	// return an array by splitting the string by ','
	return tagString.split(',');
};