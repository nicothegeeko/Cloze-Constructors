var inquirer = require('inquirer');
var ClozeCard = require('./cloze.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var numberCards;


var beginClozeCard = function(){
	//amount of cards determined by function where user puts in the amount of cards we want
	if(amt < numberCards){
		//prompt where user puts in the the "text" for the cloze card and the "cloze" card answer
	inquirer.prompt([
	{
		name: "text",
		message:"Please enter the full text of your question for your card"
	},
	{
		name: "cloze",
		message:"Please enter the answer of your cloze card"
	}
	//msg that appears if the user does not put in an answer that belongs in the cloze card
	]).then(function(answer) {
	    if (answer.text.indexOf(answer.cloze) < 0){
	    	console.log("sorry, but you're cloze needs to be in the sentence,buddy");
	    }
	    //if the user puts in the proper cloze card the info is pushed onto a new card
	    	else {
	    		var card = new ClozeCard(answer.text, answer.cloze);
	    	cards.push(card);
	    	//this is where the amount of cards wanted to tracked
	    	amt++;

	    	}

	    	beginClozeCard();

	    });
	}
	//appends the clozed card information put into in the proper text file
	else {
		console.log(cards);
		for (var i = 0; i < cards.length; i++){
			fs.appendFileSync("cloze.txt", cards[i].text+","+cards[i].cloze+"\n");
		}
		
	}
 // closes beginGame
}

//prompt asking how many cards the user wants to put into their game
inquirer.prompt([
{
	name:"amount",
	message:"How many cards do you want to create?"
}
//function to capture how many cards the user wants to create
]).then(function(answer){
	numberCards = answer.amount;
	beginClozeCard();
});










