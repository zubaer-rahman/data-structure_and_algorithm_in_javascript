class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(person){
        this.queue.push(person);
    }
    dequeue(){
         return this.queue.shift();
    }
}

const lover = new Queue();

lover.enqueue("Sufian");
lover.enqueue("Nayon");
lover.enqueue("Chayon");
lover.enqueue("Zubaer");

console.log(lover.queue);

const bf = lover.dequeue();
console.log("Winner:", bf);
console.log("Loser:",  lover.queue );