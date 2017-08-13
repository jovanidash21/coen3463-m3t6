# MMFF Movies
---

## Prerequisite
* [Node.js](https://nodejs.org/en/) installed.
* [MongoDB](https://www.mongodb.com/) installed.

## Installation
* Clone or download this repository.
```
git clone https://github.com/jovanidash21/mmff-movies.git
```
* Using a terminal or cmd, navigate to the project directory.
```
cd mmff-movies
```
* Install node modules.
```
npm install
```
* Start the MongoDB Server.
```
mongod
``` 
* Open another terminal or cmd and run mongo.
```
mongo
``` 
* Create a database locally using MongoDB on your computer.
```
use mmff-movies
``` 
* Insert to the database the JSON files inside the data folder of this project.
* Create a ```.env``` file. 
* Copy and paste the texts in ```.env.example``` to ```.env``` and insert the values for each environment variables.
* Open another terminal or cmd and run 'www' file inside the bin directory.
```
npm start
```
* Open a browser and visit ```localhost:3000```.
* Signup to create an account.
* Change the role of the account created from ```viewer``` to ```administrator``` on the database.
* Run in dev mode.
```
npm run dev
```

## NPM Scripts
* ```npm start``` - start the server.
* ```npm run build``` - run the project in production mode.
* ```npm run dev - run the project in dev mode.

## Credits
- [Login Page](https://codepen.io/ehermanson/full/KwKWEv/)
- [Bootstrap Theme](https://github.com/tui2tone/flat-admin-bootstrap-templates/releases/tag/v2.1.2)
- Contents from Google Search
- Images downloaded from Google

## Website
[Live Demo](https://mmff-movies-jovanidash21.herokuapp.com/)