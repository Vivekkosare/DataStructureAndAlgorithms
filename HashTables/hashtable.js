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
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        console.log(this.data);
        return this.data;
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log('get',currentBucket);
        for (let index = 0; index < currentBucket.length; index++) {
            const element = currentBucket[index];
            if(element[0]===key){
                console.log(element[0],element[1]);
                return element[1];
            }            
        }       
    }
    keys()
       {
            let keysArray=[];
            for (let index = 0; index < this.data.length; index++) {
                if(this.data[index]){
                    keysArray.push(this.data[index][0][0]);
                }                
            }
            console.log('KeysArray',keysArray);
            return keysArray;
        }
}

const hashTable = new HashTable(50);
var result = hashTable._hash('grapes');
console.log(result);
hashTable.set('grapes', 10000);
hashTable.set('apples', 54);
hashTable.set('oranges', 60);
hashTable.get('apples');
//const keys = hashTable.keys();

//export default HashTable;