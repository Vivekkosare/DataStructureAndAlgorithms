class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList{
    constructor(value){
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    //O(1)
    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    //O(1)
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    printList(){
        const array = [];
        let currentNode = this.head;
        while (currentNode!=null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log('Linked List: ',array);
        return array;
    }

    //O(n)
    insert(index, value){
        if(index === 0){
           this.prepend(value);
        }
        else if(index >= this.length){
            this.append(value);
        }
        //previous node
        const leader = this.traverseToIndex(index - 1);

        //current node
        const headingPointer = leader.next;

        //new node
        const newNode = new Node(value);

        //placing new node at the mentioned index
        leader.next = newNode;
        newNode.next = headingPointer;
        this.length++;

    }

    //O(n)
    remove(index){
        const leader = this.traverseToIndex(index-1);
        const nodeToDelete = leader.next;
        leader.next = nodeToDelete.next;
        this.length--;
    }

    //Retrives the node at mentioned index
    //traverseToIndex is nothing but lookup where we traverse to index
    //O(n)
    traverseToIndex(index){
        let currentNode = this.head;
        let counter = 0;
        while(counter != index){
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    } //O(n)
}

const linkedList = new SinglyLinkedList(10);
linkedList.append(4);
linkedList.append(17);
linkedList.prepend(18);
linkedList.printList();
//console.log(linkedList);
linkedList.insert(1,29);
linkedList.printList();
linkedList.remove(2);
linkedList.printList();
//console.log(linkedList.printList());