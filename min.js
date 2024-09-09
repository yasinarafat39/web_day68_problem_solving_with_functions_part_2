const prices = [20000, 10000, 51000, 63000, 25000, 100000];

function getMin(numbers) {
  let min = numbers[0];
  for (let num of numbers) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

const cheap = getMin(prices);
console.log(cheap);
