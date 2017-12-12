// fs is a core Node package for reading and writing files
var fs = require("fs");
// Require the NPM Package inquirer
var inquirer = require("inquirer");
// requiring our Guesses module exported from Guesses.js
var Guesses = require("./Guesses.js");

var wordArr;
var randomNum;

//select a random word
fs.readFile("words.txt", "utf8", function(error, data) {
  // If the code experiences any errors it will log the error to the console.
  if (error) {
    return console.log(error);
  }
  // Then split it by commas (to make it more readable)
  wordArr = data.split(",");
  randomNum = Math.floor(Math.random()*wordArr.length);
  // this is the random word that's generated
  // console.log(wordArr[randomNum]);
});


// Creates some questions
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "Who are you???"
  },
  {
    type: "confirm",
    name: "readyPlay",
    message: "Ready to hangman??"
  }

]).then(function(user) {
  // If the user doesn't select that they're ready...
  if (user.readyPlay != true) {
    console.log("==============================================");
    console.log("");
    console.log("Sorry " + user.name);
    console.log("Looks like you're not prepared to hangman!");
    console.log("");
    console.log("==============================================");
  }
  // If the user is ready to play...
  else {
    console.log("==============================================");
    console.log("");
    console.log("Let's play " + user.name);
    console.log("Time to start guessing. You have 10 guesses left.");
    console.log("");
    console.log("==============================================");

    // Ask for guessed letter
    inquirer.prompt([
    {
      type: "input",
      name: "letterSelect",
      message: "Guess a letter..."  
    }
    ]).then(function(theGuess){
      // console.log(theGuess.letterSelect.toUpperCase());
      // console.log(wordArr[randomNum]);
      // console.log(theGuess.letterSelect);
      var gameEngine = new Guesses(wordArr[randomNum]);
      // console.log(gameEngine.randomWord);
      gameEngine.addLetter(theGuess.letterSelect);
      console.log(gameEngine.addLetter.theGuess.letterSelect);
      // gameEngine.addLetter(theGuess.letterSelect.toUpperCase());
      // console.log(gameEngine.guessCount());

    });
  }

});