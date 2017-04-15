var inquirer = require('inquirer');
var BasicCard = require('./basic.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var score = 0;

////this is where the readFile is accessed and manipulates the spacing
fs.readFile('basic.txt', "utf8", function(error, data) {
    var dataArr = data.split("\n");


    //a for loop that goes through the card and parses the data contained in the array
    for (var i = 0; i < dataArr.length - 1; i++) {
        var cardArr = dataArr[i].split(',');
        var card = new BasicCard(cardArr[0], cardArr[1]);
        cards.push(card);
    }


    //the function that allows for the questions and answers in the log file to be displayed
    var playGame = function() {
            if (amt < cards.length) {
                console.log(cards[amt].front)
                inquirer.prompt([{

                        name: 'text',
                        message: 'Answer:?',

                    }
                    //this increments the cards and score based on user input
                ]).then(function(answer) {
                    if (cards[amt].back === answer.text) {
                        score++;
                        amt++;
                    } else {
                        console.log("oops, that's wrong the answer is... " + cards[amt].back);
                        amt++;
                    }
                    playGame();

                });

                //msg displaying the users score 
            } else {
                console.log("Here's your final score:" + score);
            }

        }
        // closes beginGame




    playGame();

});
//closes playGame
