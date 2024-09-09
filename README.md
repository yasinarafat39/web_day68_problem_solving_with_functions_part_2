# Practice Task

## Task - 1

```javascript
// Find the lowest number in the array below.

function getMin(numbers) {
  let minNum = numbers[0];
  for (let num of numbers) {
    if (minNum > num) {
      minNum = num;
    }
  }
  return minNum;
}

const heights2 = [167, 190, 120, 165, 137];
const result = getMin(heights2);
console.log(result); // 120

// Shortcut way to find the lowest number from array
const result = Math.min(...heights2);
console.log(result); // 120
```

## Task - 2

```javascript
// Find the friend with the smallest name.

function getSmallestFriend(friends) {
  let smallestFriend = friends[0];
  for (let friend of friends) {
    if (smallestFriend.length > friend.length) {
      smallestFriend = friend;
    }
  }
  return smallestFriend;
}

const friends = ["rahim", "robin", "rafi", "ron", "rashed"];
const result = getSmallestFriend(friends);
console.log(result); // ron
```

## Task - 3

```javascript
// task - 3
/**
 * Your task is to calculate the total budget required to buy electronics:
 *      laptop = 35000 tk
 *      tablet = 15000 tk
 *      mobile = 20000 tk
 *
 * Write a JavaScript function named calculateElectronicsBudget that takes in
   the number of laptop, tablets, and mobile and returns the total money required.
 */

function calculateElectronicsBudget(laptopBugdget, tabletBudget, mobileBudget) {
  const totalBudget = laptopBugdget + tabletBudget + mobileBudget;
  return totalBudget;
}

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

const result = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(result); // 70000
```

## Task - 4

```javascript
/**
 * You are given an array of phone objects, each containing information about
   the model, brand, and price. Your task is to write a JavaScript function named
   findAveragePhonePrice that takes this array as input and returns the average price of phone.
*/

function getAveragePrice(phones) {
  let totalPhonePrice = 0;
  let totalPhones = 0;
  for (let phone of phones) {
    totalPhonePrice += phone.price;
    totalPhones++;
  }

  const averagePrice = totalPhonePrice / totalPhones;
  return averagePrice;
}

const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
const result = getAveragePrice(phones);
console.log(result); // 58166.666666666664
```

## Task - 5

```javascript

/**
 * For each employee their current salary is calculated by multiplying yearly increment with
   experience then adding the result to the starting salary. Now calculate is the total salary
   has to be provided by the company in a month.
*/

function calculatePerMonthTotalSalaryCost(employees) {
  let perMonthTotalSalaryCost = 0;
  for (let employee of employees) {
    let totalIncrementSalary = employee.increment * employee.experience;
    const currentSalary = employee.starting + totalIncrementSalary;
    perMonthTotalSalaryCost += currentSalary;
  }
  return perMonthTotalSalaryCost;
}

const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

const result = calculatePerMonthTotalSalaryCost(employees);
console.log(result); // 149000


```
