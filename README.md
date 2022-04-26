# Game Shack
## About this Project
Game Shack is an e-commerce selling/buying website for games with full CRUD functionality.

## Table of Contents
1. [General Info](#general-info)
2. [Getting Started](#getting-started) 
3. [Project Idea](#project-idea)

## General Info
### Technologies used:
- HTML
- CSS
- JavaScript

### Express Libraries used:
- dotenv: "^16.0.0",
- ejs: "^3.1.7",
- express: "^4.17.3",
- method-override: "^3.0.0",
- mongoose: "^6.3.0",
- morgan: "^1.10.0"

## Getting started
### Installation:
To download this repository and start the server:
```
$ git clone https://github.com/SunghunP/game-shack
$ cd ../path/to/the/file
$ npm install
$ npm start
```

### Contributing:
1. Fork it!
2. Create your own branch: `git checkout -b my-new-branch`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-branch`
5. Submit a pull request! 

## Project idea
An online store full of used games! A user will be able to buy/sell games on the marketplace and add them to their library of games. 


### Wireframes and ERD:
ERD: <br/>
<img src="https://i.imgur.com/rWumEFC.png" alt="ERD" width="700px"/>

Wireframes of the inteded pages:
Welcome Page:<br/>
<img src="https://i.imgur.com/TSXHwYX.png" alt="welcome" width="700px"/><br/>
Index Page:<br/>
<img src="https://i.imgur.com/Jcmt7SO.png" alt="Index" width="700px"/><br/>
Show Page:<br/>
<img src="https://i.imgur.com/wFd1MRs.png" alt="show" width="700px"/><br/>
Form Page:<br/>
<img src="https://i.imgur.com/kEnw0Vu.png" alt="from" width="700px"/><br/>

### Past MVP:
I want to be able to let the user save/favorite a game and then come back to it later. They should also be able to see all of the games they purchased in their library and all of the games that they have currently put up for sale. 

### List of intended routes:
> `index: GET "/shop/" => renders index view of homepage for the shop` <br>
*Bonus: If the user is logged in then they will be redirected to their library instead*

> `new: GET "/shop/new" => renders new view of a form that allows user to post new game to marketplace`

> `create: POST "/shop/" => add a product to the database`

> `show: GET "/shop/:id" => show information on a game by using provided ID`

> `edit: GET "/shop/:id/edit => show edit page for a game"`

> `update: PUT "/shop/:id" => update a game using the provided ID. Then redirects back to library or homepage.`

> `delete: DELETE "/shop/id:" => find a product by ID and deletes from database`

### List of models with schemas
Game model:
```
const gameSchema = new Schema({
	name: 		{ type: String, required: true, unique: true },
	description:    { type: String, required: true },
	img: 		{ type: String },
	price: 		{ type: number, required: true },
	tags: 		{ type: String } // will have to splice the string to create an array of multiple tags for use later on. 
	quantity: 	{ type: number, required: true }
});
```

Library model:
```
const librarySchema = new Schema({
	games: [gameSchema]
});
```

### Schedule of my Goals
Day 1: Create template and generate project idea. <br>
Day 2: set up models and set up create and update routes.<br>
Day 3: set up read and delete routes.<br>
Day 4: Add O Auth and create a show route for the library.<br>
Day 5: Work on CSS to give the website some flair.<br>

### Work-Flow
Here is a link to my Trello Board with my work flow.
https://trello.com/b/hwYaTDf4/game-store