// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...arg) => arg.filter(num => num % 2 === 0)


// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator. 

const findMin = (...nums) => Math.min(...nums);


// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object. 

// mergeObjects({a:1, b:2}, {c:3, d:4})
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})


// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...num) => [arr, ...num.map(n => n * 2)]


// Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {}
const removeRandom = items => {
    let i = Math.floor(Math.random() * items.lenght);
    // this creates a random index that corresponds with the items array
    return [...items.slice(0,i), ...items(i + 1)];
    // reason we use i + 1 is to skip over the index, esentially removing it
}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {}
const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {}
const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

/** Return a new object with a key removed. */

// function removeKey(obj, key) {}
const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {}
const combine = (obj1, obj2) => ({...obj1, ...obj2});

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {}
const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}