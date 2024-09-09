
const products = [
  { name: "shampoo", price: 300 },
  { name: "Chiruni", price: 100 },
  { name: "Shirt", price: 500 },
  { name: "Pant", price: 1200 },
];

function getShoppingTotal(products) {
  let total = 0;
  for (let product of products) {
    // console.log(product);
    total += product.price;
  }
  return total;
}

const total = getShoppingTotal(products);
console.log(`total ajke khoshabe:`, total);
 