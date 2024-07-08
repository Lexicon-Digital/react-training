////// regular and arrow functions...
function regularFoo(greeting) {
  console.log(`regular fn says ${greeting}`);
}

const arrowFoo = (greeting) => {
  console.log(`arrow fn says ${greeting}`);
};

new regularFoo("howdy");
// new arrowFoo("howdy")

regularFoo("hi");
arrowFoo("hello");

const obj = {
  name: "king",
  regularFn: function () {
    console.log(this.name);
  },
  arrowFn: () => {
    console.log(this.name);
  },
};

obj.regularFn();
// obj.arrowFn();

//////// dynamic typing...
const addUp = (a, b) => a + b;

console.log(addUp(10, 20));
console.log(addUp(10, "20"));
console.log(addUp(10, true));

///////// truthy values and ===
const flag = "";
if (flag === false) {
  console.log(`${flag} is truthy`);
} else {
  console.log(`${flag} is falsey`);
}

///////// single thread....
const heavyProcessing = () => {
  for (let i = 0; i < 100_000; i++) {
    for (let j = 0; j < 100_000; j++) {
      // do nothing
    }
    if (i % 10_000 === 0) {
      console.log(`working... ${i}`);
    }
  }
  console.log("heavy processing done");
};
// setTimeout(() => heavyProcessing(), 2000);

///////// Promise
const bringMeTheInfinityStones = () => {
  return new Promise((resolve, reject) => {
    console.log("finding the infinity stones...");
    setTimeout(() => resolve("6 stones"), 4000);
  });
};

const defeatTheAvengers = () => {
  return new Promise((resolve, reject) => {
    console.log("fighting avengers...");
    setTimeout(() => reject("Failed to defeat"), 3000);
  });
};

const snapAwayHalfTheUniverse = (stones) => {
  return new Promise((resolve, reject) => {
    console.log(`snapping with ${stones}...`);
    setTimeout(() => resolve("Half the universe GONE!"), 3000);
  });
};

// bringMeTheInfinityStones().then((stones) => {
//   console.log(`got ${stones}, wearing gauntlet...`);
//   snapAwayHalfTheUniverse(stones).then((result) => console.log(result));
// });

try {
  const [stones, defeat] = await Promise.all([
    bringMeTheInfinityStones(),
    defeatTheAvengers(),
  ]);
  console.log(`got ${stones} and ${defeat}`);
  const result = await snapAwayHalfTheUniverse(stones);
  console.log(result);
} catch (error) {
  console.log(`${error}, escape!`);
}

////////// understand the task queue and event loop...
