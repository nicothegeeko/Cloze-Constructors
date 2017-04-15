var inquirer = require('inquirer');
var ClozeCard = require('./cloze.js');
var BasicCard = require('./basic.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var numberCards;


var beginBasicCard = function() {
    //amount of cards determined by function where user puts in the amount of cards we want
    if (amt < numberCards) {
        //prompt where user puts in the the "text" for the basic card and the "basic" card answer
        inquirer.prompt([{
                name: 'front',
                message: 'Please enter the text of your question for your card:'
            }, {
                name: 'back',
                message: 'Please enter the answer:'
            }
            //msg that appears if the user does not put in an answer that belongs in the basic card
        ]).then(function(answer) {
            var card = new BasicCard(answer.front, answer.back);
            cards.push(card);
            //this is where the amount of cards wanted to tracked
            amt++;
            beginBasicCard();

        });
    }
    //appends the basic card information put into in the proper text file
    else {
        console.log(cards);
        for (var i = 0; i < cards.length; i++) {
            fs.appendFileSync("basic.txt", cards[i].front + ',' + cards[i].back + '\n');
        }

    }
    // closes beginGame
};
//prompt asking how many cards the user wants to put into their game
inquirer.prompt([{
        name: "amount",
        message: "How many cards do you want to create?"
    }
    //function to capture how many cards the user wants to create
]).then(function(answer) {
    numberCards = answer.amount;
    beginBasicCard();
});
