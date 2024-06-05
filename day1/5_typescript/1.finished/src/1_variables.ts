{
  // declarations
  const country = "Australia";
  // country = "Indonesia" // constant, cannot change

  let city = "Melbourne";
  city = "Newcastle"; // can change, not a constant
  {
    let anotherCity = "Geelong";
    console.log(anotherCity); // available only in this block scope
  }
  console.log(city);
  // console.log(anotherCity) // not available as defined in a block (smaller scope)

  var state = "VIC"; // ❌ avoid using var
  state = "NSW"; // can change, not a constant
  {
    var anotherState = "WA";
  }
  console.log(anotherState); // can read variable even when defined in block (smaller scope)
}

// types
{
  const firstName: string = "Banana";
  const age: number = 12;
  const isSweet: boolean = true;
  const interests: string[] = ["anime", "footy"];

  const thirdInterest = interests[3];
  console.log(thirdInterest);

  const enemies = null;
  console.log(enemies);

  // const almostNeverUsed: bigint = 34n;
  // see https://en.wikipedia.org/wiki/ECMAScript_version_history
  // see https://caniuse.com/?search=bigint
  //   const anotherOneThatYouWillNeverUse: symbol = Symbol("23");

  let lastName: string = "Fruit";
  // name = 100 // error, cannot set number value to string variable
  // 👆 you could do this in JS
}

// types are inferred
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
