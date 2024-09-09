function add(num1, num2) {
  return num1 + num2;
}

function substruct(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculator(a, b, operation) {
  if (operation === "add") {
    return add(a, b);
  } else if (operation === "substruct") {
    return substruct(a, b);
  } else if (operation === "multiply") {
    return multiply(a, b);
  } else if (operation === "divide") {
    return divide(a, b);
  } else {
    return "Only 'add', 'substruct', 'multiply', 'divide'";
  }
}

const result = calculator(8, 5, "add");
console.log(result);
