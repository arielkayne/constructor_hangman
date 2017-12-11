// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Check-box,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Created a series of questions
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
  console.log(user.readyPlay);

  // If the user is ready to play...
  if (user.readyPlay) {

    console.log("==============================================");
    console.log("");
    console.log("Let's play " + user.name);
    console.log("Type in your first letter guess.");
    console.log("");
    console.log("==============================================");
  }


  // If the user doesn't select that they're ready...
  else {

    console.log("==============================================");
    console.log("");
    console.log("Sorry " + user.name);
    console.log("Looks like you're not prepared to hangman!");
    console.log("");
    console.log("==============================================");

  }
});

