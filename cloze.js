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



module.exports = ClozeCard;
