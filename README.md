# Project idea
An online store full of used games! A user will be able to buy/sell games on the marketplace and add them to their library of games. 
#### Past MVP:
I want to be able to let the user save/favorite a game and then come back to it later. They should also be able to see all of the games they purchased in their library and all of the games that they have currently put up for sale. 

## list of intended routes
`index: GET "/shop/" => renders index view of homepage for the shop .`
*Bonus: If the user is logged in then they will be redirected to their library instead*

`new: GET "/shop/new" => renders new view of a form that allows user to post new game to marketplace`

`create: POST "/shop/" => add a product to the database`

`show: GET "/shop/:id" => show information on a game by using provided ID`

`edit: GET "/shop/:id/edit => show edit page for a game"`

`update: PUT "/shop/:id" => update a game using the provided ID. Then redirects back to library or homepage.`

`delete: DELETE "/shop/id:" => find a product by ID and deletes from database`

## list of models with schemas
Game model:
```
const gameSchema = new Schema({
	name: 		{ type: String, required: true, unique: true },
	description:    { type: String, required: true },
	img: 		{ type: String },
	price: 		{ type: number, required: true },
	tags: 		{ type: String } // will have to splice the array to create multiple tags. 
	quantity: 	{ type: number, required: true }
});
```

Library model:
```
const librarySchema = new Schema({
	games: [gameSchema]
});
```

## list of libraries used (express, ejs, method-override, jquery, etc.)
- express, ejs, method-override, dotenv, mongoose

## schedule of what your goal is each day of project week
Day 1: Create template and generate project idea.
Day 2: set up models and set up create and update routes.
Day 3: set up read and delete routes.
Day 4: Add O Auth and create a show route for the library.
Day 5: Work on CSS to give the website some flair.