class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;

    }

    peek() {
        console.log(this.top);
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length == 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

class Queue {
    constructor() {
       // this.first = null;
        //this.last = null;
        this.stack = new Stack();
        this.length = 0;
    }

    peek() {
       // return this.first;
    }

    enqueue(value) {
        let stack2 = new Stack();

        

        while (this.length > 0) {
            stack2.push(this.stack.pop());
        }
        console.log('stack2: ',stack2)
        this.stack.push(value);

        console.log('this.stack: ',this.stack)

        while (stack2.length > 0) {
            this.stack.push(stack2.pop());
        }
       
        console.log('this.stack: ',this.stack)
        this.length++;
        //console.log(this.stack)
        return this;


    }

    dequeue() {
        // let stack2 = new Stack();
        // // if(!this.stack1.length){
        // //     return null;
        // // }
        // // else{
        //     while(this.stack1.length){
        //         stack2.push(this.stack1.pop());
        //     }
        //     this.stack1
        // // }

        // this.Stack.pop();
        // this.length--;
        return this;
    }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
// queue.enqueue(3);
//  queue.dequeue();
console.log(queue);