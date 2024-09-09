const jim = 100;
const kim = 2055;
const tim = 3000;

if (jim > kim && jim > tim) {
  console.log(`Jim is the ultimate Boss`);
} else if (kim > jim && kim > tim) {
  console.log(`kim is the ultimate Boss`);
} else {
  console.log(`tim is the ultimate Boss`);
}

// inside function
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return `${num1} is the ultimate Boss`;
  } else if (num2 > num1 && num2 > num3) {
    return `${num2} is the ultimate Boss`;
  } else {
    return `${num3} is the ultimate Boss`;
  }
}

const max3 = maxOfThree(510, 844, 500);
console.log(max3); 


const max = Math.max(12, 15, 48, 20, 65, 100) 
console.log(max) // 100