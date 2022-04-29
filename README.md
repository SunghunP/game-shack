# Game Shack
## About this Project
Game Shack is an e-commerce selling/buying website for games with full CRUD functionality.

## Table of Contents
1. [General Info](#general-info)
2. [Getting Started](#getting-started) 
3. [Project Idea](#project-idea)
4. [Updates](#updates)

## General Info
### Website Link
https://game-shack-sunghunp.herokuapp.com/

### Screen shots of the website
Welcome Page <br/>
<img src="https://i.imgur.com/YKebfGv.png" alt="ERD" width="700px"/> <br/>

Games Index <br/>
<img src="https://i.imgur.com/vcdaMlm.jpg" alt="ERD" width="700px"/> <br/>

### Technologies used:
- HTML
- CSS
- JavaScript
- EJS

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

Wireframes of the Intended pages:
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
	name:	{ type: String, required: true, unique: true },
	desc:   { type: String, required: true, default: `Description of ${this.name}`},
	img: 	{ type: String }, // will provide a blank image if none is entered
	price: 	{ type: number, required: true, min: [0, 'The price must be greater than 0!']},
	qty: 	{ type: number, required: true, min: [0, 'The quantity must be a positive number!']},
	tags: 	{ type: Array }
});
```

User model:
```
const userSchema = new Schema({
	username:	{ type: String, required: true, unique: true },
	password:	{ type: String, required: true },
	library:	{ [gameSchema] }
});
```

### Work-Flow
Here is a link to my Trello Board with my work flow.
https://trello.com/b/hwYaTDf4/game-store

## Updates
### 4/28/2022
- Fix bug where the z-index of game container becomes higher than header when hovering over the container.
