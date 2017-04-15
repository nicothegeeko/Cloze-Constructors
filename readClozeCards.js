var inquirer = require('inquirer');
var ClozeCard = require('./cloze.js');
var basic = require('./basic.js');
var fs = require('fs');
var amt = 0;
var cards = [];
var score = 0;

fs.readFile('cloze.txt', "utf8", function(error, data){
var dataArr = data.split("\n");

// console.log(dataArr);

for (var i = 0; i < dataArr.length-1;i++){
	var cardArr = dataArr[i].split(',');
	var card = new ClozeCard (cardArr[0], cardArr[1]);
	cards.push(card);
}
// console.log(cards);





var playGame = function(){
 	if (amt < cards.length){
	 	cards[amt].dots();
		inquirer.prompt([
		{	

			name: 'text',
			message: 'Answer:?',
			
		}
		]).then(function(answer) {
			if (cards[amt].cloze === answer.text){
				score++;
				amt++;
			}
			else {
				console.log("oops, that's wrong the answer is... " + cards[amt].text);
				amt++;
			}
			playGame();

	   	});
	}
	else{
		console.log("Here's your final score:"+ score);
	}
		
}
 // closes beginGame




playGame();

});




// var basicCardPrompt = function(){
// 	inquirer.promt([{
// 		name: "";
// 		front: "";
// 		back: "";
// 	}])
// }

