var inquirer = require('inquirer');
var ClozeCard = require('./cloze.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var score = 0;

//this is where the readFile is accessed and manipulates the spacing
fs.readFile('cloze.txt', "utf8", function(error, data) {
    var dataArr = data.split("\n");

    //for loop to cycle through the log file for ClozeCard and parses them
    for (var i = 0; i < dataArr.length - 1; i++) {
        var cardArr = dataArr[i].split(',');
        var card = new ClozeCard(cardArr[0], cardArr[1]);
        cards.push(card);
    }





    //the function that allows for the questions and answers in the log file to be displayed
    var playGame = function() {
        if (amt < cards.length) {
            cards[amt].dots();
            inquirer.prompt([{

                name: 'text',
                message: 'Answer:?',

                //this increments the cards and score based on user input
            }]).then(function(answer) {
                if (cards[amt].cloze === answer.text) {
                    score++;
                    amt++;
                } else {
                    console.log("oops, that's wrong the answer is... " + cards[amt].text);
                    amt++;
                }
                playGame();

            });
        }
        //msg displaying the users score  
        else {
            console.log("Here's your final score:" + score);
        }

    }





    playGame();

});
// closes playGame
