# Cloze-Constructors
# Unit 11 Assignment: Cloze Constructors

# App Description:

Created a backend node application that creates tradiditonal (front and back flashcards) and also creates cloze cards, which replaces answers with'...'. 

Also can go through flash cards created (front, back, and clozed) and replay them as a game that keeps score based on how many cards are located in the text file.

# Instructions:

* In order to create a cloze card type "node clozeCards.js" and a prompt should come up that asks how many cards you would like to create. Then what the text of the full cloze card sentence is and then what the answer located within the clozed card text is. 

* In order to create a basic card type "node basicCards.js" and a prompt should come up that asks how many cards you would like to create. Then the prompt will ask what the front question should be and what the back answer will be. 

* In order to play the cloze card game type "node readBasicCards.js" and then the game should begin with the first question contained in the basic.txt file. 

* In order to play the basic card game type "node readClozeCards.js" and then the game should begin with the first question contained in the cloze.txt file. 

# Basic Card Format Example:
1. **Basic** flashcards, which have a front (_"Who was the first president of the United States?"_), and a back (_"George Washington"_).

## Cloze Card Format Example:
2. **Cloze-Deleted** flashcards, which present _partial_ text (_"... was the first president of the United States."_), and the full text when the user requests it (_"George Washington was the first president of the United States."_)

#Technologies Used: 
	* Node.js
	* Javascript


## Code Explanation/Examples: 


The Constructors for both the basic card and cloze cards work very similarly, with the exception of the cloze card which deletes and replaces a portion of text with "...". 

This is an example of the constructor function used for the cloze card. As you can see the "text" and "cloze" portions are seperated by inputs and then replaced with dots.

```
//constructor to create the basic cards 
function ClozeCard(text, cloze) {
    if (this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
    } else {
        return new ClozeCard(text, cloze)
    }
    //replace the cloze card text with ... representing the cloze
    this.dots = function() {
        var parts = text.replace(cloze, '...');
        console.log(parts);
    }
}

```
Using the inquirer npm the user is prompted to input the for the cloze card, and create the card-- the basic card function operates similarly.

```
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

```
This portion of clozeCards.js parses through the information and appends the information into the the cloze.txt file. 

```
else {
		console.log(cards);
		for (var i = 0; i < cards.length; i++){
			fs.appendFileSync("cloze.txt", cards[i].text+","+cards[i].cloze+"\n");
		}
		
	}

```
