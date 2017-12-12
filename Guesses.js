// requiring our Guesses module exported from Guesses.js
var Letters = require("./Letter.js");

// constructor function for creating guess objects
var Guesses = function(randomWord) {
  // this.students will hold all of our student objects
  this.guesses = [];
  this.randomWord = randomWord;

  // a method that creates a letter using our Letter constructor.
  // It then pushes the new letter object to this.guesses 
  this.addLetter = function(x) {
    this.guesses.push(new Letter(x));
  };
  // this method will tell you how many letters have been guessed 
  this.guessCount = function() {
    return this.guesses.length;
  };
};

// exporting our Classroom constructor. We will require it in main.js
module.exports = Guesses;
