var inquirer = require('inquirer');
var ClozeCard = require('./cloze.js');
var BasicCard = require('./basic.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var numberCards;


var beginBasicCard = function(){
	if(amt < numberCards){
	inquirer.prompt([
	{
		name: 'front',
		message:'Please enter the text of your question for your card:'
	},
	{
		name: 'back',
		message:'Please enter the answer:'
	}
	]).then(function(answer) {
	    var card = new BasicCard(answer.front, answer.back);
	    	cards.push(card);
	    	amt++;
	    	beginBasicCard();

	    });
	}
	else {
		console.log(cards);
		for (var i = 0; i < cards.length; i++){
			fs.appendFileSync("basic.txt", cards[i].front+','+cards[i].back+'\n');
		}
		
	}
 // closes beginGame
};

inquirer.prompt([
{
	name:"amount",
	message:"How many cards do you want to create?"
}
]).then(function(answer){
	numberCards = answer.amount;
	beginBasicCard();
});


