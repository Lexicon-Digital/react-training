"use strict";
// objects
{
    const car = {
        make: "Mazda",
        model: "cx5",
        kilometres: 31000,
        isNew: false,
    };
    console.log(car.make + " " + car.model); // ▶️ prints "Mazda cx5"
    // you can use template strings to embed variables in strings, note, we use backtick (`...`) instead of double quotes ("....")
    console.log(`The car is a ${car.make} ${car.model} that's done ${car.kilometres} kms`); // ▶️ prints "The car is a Mazda cx5 that's done 31000 kms"
    const anotherCar = {
        make: "Nissan",
        model: "X-Trail",
        kilometres: 120000,
        isNew: false,
        // colour: "red" // no can't do, not declared in Car type
    };
}
// union of types
{
    let grade = "A";
    grade = 10;
    let marks;
    console.log(`marks : ${marks}`); // ▶️ will print "marks : undefined"
    marks = 99;
    console.log(`marks : ${marks}`); // ▶️ will print "marks : 99"
    let prettyCrazyType; // ❌ possible, but try avoid
    let avoidUsingAnyType; // ❌ possible, but try avoid
    let grades;
    grades = "A";
    const result = "A";
    const sparrow = {
        name: "Sparrow",
        wingspan: 12,
    };
    const carp = {
        name: "Carp",
        swimSpeed: 8,
    };
    const flyingFish = {
        name: "FlyingFish",
        wingspan: 6,
        swimSpeed: 12,
    };
}
