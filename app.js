class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash = (hash + key.charCodeAt(index) * index) %
            this.data.length;
            
        }
        return hash;
    }

    set(key, value){
        const address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        console.log(this.data);
        return this.data;
    }
}

const hashTable = new HashTable(50);
var result = hashTable._hash('grapes');
console.log(result);
hashTable.set('grapes', 10000);
// hashTable.get('grapes');