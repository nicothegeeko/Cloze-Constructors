//constructor to create the basic cards 
function BasicCard(front, back) {
    if (this instanceof BasicCard) {
        this.front = front;
        this.back = back;
    } else {
        return new BasicCard(cat, front, back);
    }
}

module.exports = BasicCard;
