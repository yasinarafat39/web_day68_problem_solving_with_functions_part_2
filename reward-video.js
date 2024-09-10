// Problem - 1

function calculateMoney(ticketSale) {
  if (ticketSale < 0 || typeof ticketSale !== "number") {
    return "Invalid Number";
  }

  let remainingAmount = ticketSale * 120 - (8 * 50 + 500);
  return remainingAmount;
}

// Test problem 1
// console.log(calculateMoney(10));
// console.log(calculateMoney(1055));
// console.log(calculateMoney(93));
// console.log(calculateMoney(-93));
// console.log(calculateMoney('sdkfk'));

// Problem - 2
function checkName(name) {
  if (typeof name !== "string") {
    return "Invalid";
  }

  //   let result = false;
  let lastLetter = name[name.length - 1].toLowerCase();
  const checkArray = ["a", "y", "i", "e", "o", "u"];

  //   for (let item of checkArray) {
  //     if (item === lastLetter.toLowerCase()) {
  //       result = true;
  //     }
  //   }

  const result = checkArray.includes(lastLetter);
  return result ? "Good Name" : "Bad Name";
}

// console.log(checkName("Salman"));
// console.log(checkName("Jhankar"));
// console.log(checkName("RAFEE"));
// console.log(checkName(199));
// console.log(checkName(["Rashed"]));

// Problem - 3

function deleteInvalids(array) {
  if (Array.isArray(array) !== true) {
    return "Invalid Array";
  }

  const numberArray = [];

  for (let item of array) {
    if (typeof item === "number" && isNaN(item) === false) {
      numberArray.push(item);
    }
  }

  return numberArray;
}

// console.log(
//   deleteInvalids([
//     "undefine",
//     15,
//     -7,
//     null,
//     NaN,
//     ["name", "age"],
//     { name: "Yasin", age: 25 },
//   ])
// );
// console.log(deleteInvalids(["1", { num: 2 }, NaN]));
// console.log(deleteInvalids([1, 2, -3]));
// console.log(deleteInvalids({array: [1, 2, -3]}));

// Problem 4
function password(obj) {
  if (
    obj.name === undefined ||
    obj.birthYear === undefined ||
    obj.siteName === undefined ||
    obj.birthYear.toString().length !== 4
  ) {
    return "Invalid";
  }

  const capitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);

  let passwordString = capitalSiteName + "#" + obj.name + "@" + obj.birthYear;
  return passwordString;
}

// console.log(password({ name: "kalimuddin", birthYear: 1999, siteName: "google"}));
// console.log(password({ name: "rahat", birthYear: 2002, siteName: "facebook"}));
// console.log(password({ name: "toky", birthYear: 200, siteName: "facebook"}));

// problem 5
function monthlySavings(payments, livingCost) {
  // Error handle
  if (Array.isArray(payments) === false || typeof livingCost !== "number") {
    return "Invalid Input";
  }

  // calculate Total Income
  let totalIncome = 0;
  for (let payment of payments) {
    if (payment >= 3000) {
      // deduct tax amount
      const tax = payment * 0.2;
      totalIncome += payment - tax;
    } else {
      totalIncome += payment;
    }
  }

  const savings = totalIncome - livingCost;

  return savings >= 0 ? savings : "Earn More";
}

console.log(monthlySavings([35, 200, 5000, 6030, 800, 3500], 500));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(10000, [900, 2700, 3400]));
