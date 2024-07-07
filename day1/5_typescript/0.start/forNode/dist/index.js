"use strict";
console.log(`Just testing some TS code`);
////// infers type, can explicity mention
let item = 10;
console.log(`item is ${item}.`);
{
    const firstName = "Banana";
    const age = 12;
    const isSocial = false;
    const interests = ["anime", "footy"];
    console.log(typeof firstName); // ▶️ will print "string"
    console.log(typeof age); // ▶️ will print "number"
    console.log(typeof isSocial); // ▶️ will print "boolean"
    console.log(typeof interests); // ▶️ will print "object" (📝 array is an oject)
    console.log(Array.isArray(interests)); // ▶️ will print "true"
}
////// method signature
function addUp(a, b) {
    return a + b;
}
console.log(`adding up ${addUp(10, 10)}.`);
////// scope
let city = "Melbourne";
city = "Newcastle"; // can change, not a constant
{
    let anotherCity = "Sydney";
    console.log(anotherCity); // available only in this block scope
}
console.log(city);
// console.log(anotherCity) // not available as defined in a block (smaller scope)
// AVOID var
// object literal
const car = {
    make: "Mazda",
    model: "cx5",
    kilometres: 31000,
    isNew: false,
};
console.log(`the car is a ${car.make}`);
console.log(`the car has props: `, Object.keys(car).join(","));
console.log(`the car has values: `, Object.values(car).join(","));
const companyName = "nib";
const duplicateCar = car; // originally car not defined as type Car, still ok!
const maybe = Date.now() % 2 === 0 ? "some value" : undefined;
const sparrow = {
    name: "Sparrow",
    wingspan: 12,
    fly: () => {
        console.log("flying");
    },
};
const carp = {
    name: "Carp",
    swimSpeed: 8,
    swim: () => {
        console.log("swimming");
    },
};
const flyingFish = {
    name: "FlyingFish",
    wingspan: 6,
    swimSpeed: 12,
    fly: () => {
        console.log("flying");
    },
    swim: () => {
        console.log("swimming");
    },
};
const member = {
    name: "John",
    age: 23,
    status: "Gold",
};
const vip = {
    name: "John",
    status: "Gold",
    tier: 2,
};
const candy = {
    quantity: 1,
    unitPrice: 0.2,
};
console.log(`Discount percentage is ${candy.discount?.percentage ?? "0%"}`);
const size = "XL";
const routes = {
    one: "/",
    about: "/about",
};
const r = "/";
var Position;
(function (Position) {
    Position[Position["First"] = 0] = "First";
    Position[Position["Second"] = 1] = "Second";
    Position[Position["Third"] = 2] = "Third";
})(Position || (Position = {}));
const memberResponse = {
    code: 200,
    body: {
        name: "John",
        status: "Gold",
    },
};
////////////// functions
const isEligible = (member) => {
    const { status } = member; // deconstruct
    return status === "Gold";
};
const formatMoney = (amount, currency = "AUD") => {
    return `${currency} ${amount}`;
};
console.log(formatMoney(12.2));
// It is possible to pass any number of arguments using the spread operator ...
const printAllNames = (name, ...otherNames) => {
    console.log(`${name}, ${otherNames.join(", ")}`);
};
printAllNames("Jack"); // just one ▶️ prints "Jack, "
printAllNames("Jack", "Jill", "Jagan", "James", "John");
let student = {
    marks: 20,
};
const incrementMarks = (arg) => {
    arg.marks++;
};
incrementMarks(student);
console.log(`marks after call: ${student.marks}`);
/////////// Arrays
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
