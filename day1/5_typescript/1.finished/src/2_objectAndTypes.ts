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
  console.log(
    `The car is a ${car.make} ${car.model} that's done ${car.kilometres} kms`
  ); // ▶️ prints "The car is a Mazda cx5 that's done 31000 kms"
  // 📝 get familiar with template strings, we will use them going forward to print messages with variables

  // like we did for grades, we can use a type here
  type Car = {
    make: string;
    model: string;
    kilometres: number;
    isNew: boolean;
  };

  const anotherCar: Car = {
    make: "Nissan",
    model: "X-Trail",
    kilometres: 120000,
    isNew: false,
    // colour: "red" // no can't do, not declared in Car type
  };
}

// union of types
{
  let grade: string | number = "A";
  grade = 10;

  let marks: number | undefined;
  console.log(`marks : ${marks}`); // ▶️ will print "marks : undefined"
  marks = 99;
  console.log(`marks : ${marks}`); // ▶️ will print "marks : 99"

  let prettyCrazyType: string | number | boolean | undefined; // ❌ possible, but try avoid
  let avoidUsingAnyType: any; // ❌ possible, but try avoid

  let grades: "A" | "B" | "C";
  grades = "A";
  // grades = "D" // not possible

  // better way to do above
  type Grade = "A" | "B" | "C";
  const result: Grade = "A";

  type Bird = {
    name: string;
    wingspan: number;
  };
  type Fish = {
    name: string;
    swimSpeed: number;
  };
  type Animal = Bird | Fish; // can be type Fish OR type Fish

  const sparrow: Animal = {
    name: "Sparrow",
    wingspan: 12,
  };
  const carp: Animal = {
    name: "Carp",
    swimSpeed: 8,
  };

  type FishThatCanFly = Bird & Fish; // type Bird AND Fish, has properties of both types
  const flyingFish: FishThatCanFly = {
    name: "FlyingFish",
    wingspan: 6,
    swimSpeed: 12,
  };
}
