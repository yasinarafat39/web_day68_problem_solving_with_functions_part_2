const height = [65, 52, 45, 21, 66, 58, 60];
const height2 = [100, 52, 20];

function getTallest(numbers) {
  let tallest = numbers[0];
  for (let num of numbers) {
    // console.log(num)
    if (tallest < num) {
      tallest = num;
    }
  }
  return tallest;
}

console.log(getTallest(height)); // 66
console.log(getTallest(height2)); // 100

// HomeWork = min number
function getSmallest(numbers) {
  let smallest = numbers[0];
  for (let num of numbers) {
    // console.log(num);
    if (smallest > num) {
      smallest = num;
    }
  }

  return smallest;
}

console.log(getSmallest(height)) // 21
