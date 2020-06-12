class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peep(){
        return this.top;
    }
    
    push(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.top = newNode;
            this.bottom = newNode;
        }
        else{
            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this;
    }
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
console.log(stack);