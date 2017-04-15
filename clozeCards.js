var inquirer = require('inquirer');
var ClozeCard = require('./cloze.js');
var basic = require('./basic.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var numberCards;


var beginClozeCard = function(){
	if(amt < numberCards){
	inquirer.prompt([
	{
		name: "text",
		message:"Please enter the full text of your question for your card"
	},
	{
		name: "cloze",
		message:"Please enter the answer of your cloze card"
	}
	]).then(function(answer) {
	    if (answer.text.indexOf(answer.cloze) < 0){
	    	console.log("sorry, but you're cloze needs to be in the sentence,buddy");
	    }
	    	else {
	    		var card = new ClozeCard(answer.text, answer.cloze);
	    	cards.push(card);
	    	amt++;

	    	}

	    	beginClozeCard();

	    });
	}
	else {
		console.log(cards);
		for (var i = 0; i < cards.length; i++){
			fs.appendFileSync("cloze.txt", cards[i].text+","+cards[i].cloze+"\n");
		}
		
	}
 // closes beginGame
}

inquirer.prompt([
{
	name:"amount",
	message:"How many cards do you want to create?"
}
]).then(function(answer){
	numberCards = answer.amount;
	beginClozeCard();
});








// var basicCardPrompt = function(){
// 	inquirer.promt([{
// 		name: "";
// 		front: "";
// 		back: "";
// 	}])
// }

