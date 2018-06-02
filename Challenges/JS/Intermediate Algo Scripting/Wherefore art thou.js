function whatIsInAName(collection, source) {

    let arr = [];
    let source_keys =[];

    source_keys = Object.keys(source);
    source_values = Object.values(source);
    collection.forEach(element => {
        let source_keys_exhaust_count = 0;
        for(let i = 0; i < source_keys.length; i++) {
            if(element.hasOwnProperty(source_keys[i]) & element[source_keys[i]] == source_values[i]) {
                source_keys_exhaust_count++;
            }
        }
        if(source_keys_exhaust_count == source_keys.length) {
            arr.push(element);
        }
    }); 
    return arr;
}

console.log(whatIsInAName([{
        first: "Romeo",
        last: "Montague"
    },
    {
        first: "Mercutio",
        last: null
    },
    {
        first: "Tybalt",
        last: "Capulet"
    }
], {
    last: "Capulet"
}));