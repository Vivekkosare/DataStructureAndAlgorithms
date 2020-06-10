function firstRecurrence(input){
    for (let i = 0; i < input.length; i++) {
        for (let j = i+1; j < input.length; j++) {
            if(input[i]==input[j])
            {
                console.log('Recurring element: ',input[i]);
                return input[i];
            }
            
        }
        
    }
}

function firstRecurrenceByHash(input){
    let map = {};
    for (let i = 0; i < input.length; i++) {
        console.log(map[input[i]]);
        if(map[input[i]] != undefined)
        {
            console.log('recurring by hash: value =', input[i],', index= ', i);
            return input[i];
        }
        else
        {
            map[input[i]] = i;
        }

        const element = input[i];
        
    console.log('Hash result',map);
    }
    console.log('Hash',map);
}

firstRecurrence([2,5,1,2,3,5,1,2,4]);
firstRecurrenceByHash([2,5,1,2,3,5,1,2,4]);

console.log('this concludes that hash is faster than array')
