const mobiles = [
  { name: "Samsung", price: 20000, camera: "12MP", color: "Black" },
  { name: "Xoami", price: 18000, camera: "12MP", color: "Black" },
  { name: "Oppo", price: 30000, camera: "12MP", color: "Black" },
  { name: "Iphone", price: 120000, camera: "12MP", color: "Black" },
  { name: "Walton", price: 15000, camera: "12MP", color: "Black" },
  { name: "HTC", price: 22000, camera: "12MP", color: "Black" },
];

function getCheapestPhone(phones) {
  let min = phones[0];
  for (let phone of phones) {
    // console.log(phone);
    if (phone.price < min.price) {
      min = phone;
    }
  }

  return min;
}

const cheap = getCheapestPhone(mobiles);
console.log(cheap);

// get Highest price phone
function getHighestPhone(phones) {
  let high = phones[0];
  for (let phone of phones) {
    // console.log(phone);
    if (phone.price > high.price) {
      high = phone;
    }
  }
  return high;
}

const high = getHighestPhone(mobiles);
console.log(high);
