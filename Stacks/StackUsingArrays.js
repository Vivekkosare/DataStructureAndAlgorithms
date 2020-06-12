
class Stack{
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length - 1];
    }
    
    push(value){
        this.array.push(value);
        return this;
    }

    pop(){
        this.array.pop();
        return this;
    }
}

const stack = new Stack();
stack.push('Google');
stack.push('Udemy');
stack.push('Discord');
console.log(stack);
stack.peek();
stack.pop();
stack.pop();
console.log(stack);