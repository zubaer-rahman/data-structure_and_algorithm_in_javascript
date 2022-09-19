//FIFO
class Stack {
    constructor(){
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}
const guest = new Stack();
guest.add("Sufi");
guest.add("Nayon");
guest.add("Chayan");
guest.add("Zubaer");

console.log(guest.stack);

const speaker = guest.remove();

console.log(speaker);

console.log(guest.stack);
