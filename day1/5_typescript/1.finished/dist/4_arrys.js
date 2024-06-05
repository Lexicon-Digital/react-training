"use strict";
// arrays
{
    let myArray = []; // (📝 array size not specified)
    const arrayOfFruits = ["apple", "mango", "banana"]; // array items type inferred
    // access item at any index
    console.log(`item at index 0: ${arrayOfFruits[0]}`); // "apple"
    console.log(`item at index 12: ${arrayOfFruits[12]}`); // undefined
    // create a copy of array using spread operator ...
    myArray = [...arrayOfFruits];
    // functions that mutate the array
    arrayOfFruits.push("kiwi"); // adds new item to end of array, arrayOfFruits =  ["apple", "mango", "banana", "kiwi"]
    arrayOfFruits.pop(); // removes and returns the last item "kiwi", arrayOfFruits = ["apple", "mango", "banana"]
    arrayOfFruits.unshift("orange"); // adds new item to start of array, arrayOfFruits = ["orange", "apple", "mango", "banana"]
    arrayOfFruits.shift(); // removes and returns the last item "orange", arrayOfFruits = ["apple", "mango", "banana"]
    arrayOfFruits.splice(1, 1);
    console.log(arrayOfFruits.join(","));
}
