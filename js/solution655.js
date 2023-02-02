class Stack{
    constructor(){
        this.size = 0;
        this.storage = {};
    }
    push(value){
        this.size++
        this.storage[this.size] = value;
        
    }
    pop(){
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
    peek(){
        return this.storage[this.size]
    }
}

class Queue{
    constructor(){
        this.storage = {}
        this.head = 0
        this.tail = 0
    }
    enqueue(element){
        this.storage[this.tail] = element
        this.tail++
    }
    dequeue(){
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
    size(){
        return this.tail - this.head
    }
}
