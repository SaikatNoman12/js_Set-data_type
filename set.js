/* == declare Set() data type == */
const letters = new Set([1, 2, 3, 4, 5]);
// sets output;
console.log(letters);



/* == add() data add in Set() data type; == */
const letters2 = new Set();

// add data directly;
letters2.add('Nomaan');
letters2.add('Mahin');

// add data use variable;
const hasnat = 'Abu Hasnat';
letters2.add(hasnat);

// sets output;
console.log(letters2);


/* == use forEach method for looping; == */
const letters3 = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']);

letters3.forEach(function (value) {
    console.log(value);  // looping all Set() method value. step by step;
});


/* == values() method use in Set() datatype . == */
const values = letters3.values();
console.log(values);   // return a iterator value. this value use 'for loop'.;

for (let value of values) {
    console.log('hello', value);  // looping all Set() value. step by step.
}


/* == keys() method use in Set() data type.  == */
const keys = letters3.keys();
console.log(keys);   // keys() method return iterator values();

for (let key of keys) {
    console.log('geloo', key);   // looping all Set() value. step by step;
}


/* == entries() methods use in Set() data type == */
const entries = letters3.entries()

console.log('entries()', entries);  // return all to value and value pair array. Use 'for loop'


/*==
Look likes:-
[
    [a, a],
    [b, b],
    [c, c],
    [d, d]
] 

==*/


