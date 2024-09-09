function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a valid input including number";
  }

  const mult = num1 * num2;
  return mult;
}

const result = multiply(5, 4);
console.log(result);


// function validation 
function getSecondItemFromArray(numbers) {
  if (Array.isArray(numbers) === true) {
    return "Please provide an array";
  }
  const second = numbers[1];
  return second;
}

const numbers = [54, 87, 15, 884, 65];
const objNumbers = {
    name: 'num',
    numbers: [54, 87, 15, 884, 65],
}
const secondItem = getSecondItemFromArray(objNumbers);
console.log(secondItem);
