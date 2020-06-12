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

    peek(){
        console.log(this.top);
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

    pop(){
        if(!this.top){
            return null;
        }
        if(this.top === this.bottom)
        {
            this.bottom = null;
        }
        const holdingPointer = this.top;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
console.log(stack);
stack.peek();
stack.pop();
stack.pop();
console.log(stack);