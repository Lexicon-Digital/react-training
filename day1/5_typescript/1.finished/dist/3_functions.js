"use strict";
// functions
// function that takes in an argument
function print(message) {
    console.log(message);
}
print("I am using the print function");
// 👇 called arrow functions, same function different syntax
const anotherPrint = (message) => {
    console.log(message);
};
anotherPrint("I am using the print arrow function");
function printMoney(amount, currency) {
    console.log(`${amount} ${currency}`);
}
printMoney(12.2, "AUD"); // ▶️ will print "12.2 AUD"
// function that takes in 2 arguments, with second one optional, defaulting to AUD when not provided
function printMoneyWithDefaults(amount, currency = "AUD") {
    console.log(`${amount} ${currency}`);
}
printMoneyWithDefaults(3.14, "USD"); // ▶️ will print "3.14 USD"
printMoneyWithDefaults(3.14, "AUD"); // ▶️ will print "3.14 AUD"
printMoneyWithDefaults(3.14); // ▶️ will print "3.14 AUD"
// defaults can also be achieved as below
// function that takes in 2 arguments, with second one optional
function printMoneyHandleUndefinedCurrency(amount, currency) {
    let currencyToUse = "AUD";
    if (currency != undefined) {
        currencyToUse = currency;
    }
    console.log(`${amount} ${currencyToUse}`);
}
printMoneyWithDefaults(3.14, "USD"); // ▶️ will print "3.14 USD"
printMoneyWithDefaults(3.14, "AUD"); // ▶️ will print "3.14 AUD"
printMoneyWithDefaults(3.14); // ▶️ will print "3.14 AUD"
// functions can also explicitly define return types
function doNothing() {
    console.log("doing nothing, returning nothing");
}
function sum(num1, num2) {
    return num1 + num2;
}
// again, these 👇 two 👆 functions do the same, just different syntax
const add = (num1, num2) => {
    return num1 + num2;
};
// becuase multiply is of type MultiplyMethod, we know argument and return types
const multiply = (a, b) => {
    return a * b;
};
// It is possible to pass any number of arguments using the spread operator ...
const printAllNames = (name, ...otherNames) => {
    console.log(`${name}, ${otherNames.join(", ")}`);
};
printAllNames("Jack"); // just one ▶️ prints "Jack, "
printAllNames("Jack", "Jill", "Jagan", "James", "John"); // or many ▶️ prints "Jack, Jill, Jagan, James, John"
