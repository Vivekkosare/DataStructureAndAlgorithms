class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
        }
        else{
            let currentNode = this.root;
            while (true) {
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                }
                else{
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }                
            }
        }
    }

    lookup(value){
        if(!this.root){
            return false;
        }        
        else{
            let currentNode = this.root;
            while (currentNode) {
                if(value < currentNode.value){
                    currentNode = currentNode.left;
                }
                else if(value > currentNode.value){
                    currentNode = currentNode.right;
                }
                else if(value === currentNode.value){
                    console.log('Found Node: ', currentNode);
                    return currentNode;
                }
                
            }
            return false;
        }
    }

}

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(44);
binarySearchTree.insert(8);
binarySearchTree.insert(3);
binarySearchTree.insert(62);
binarySearchTree.insert(7);
console.log(binarySearchTree);

console.log('next');
binarySearchTree.lookup(13);
//console.log(binarySearchTree);