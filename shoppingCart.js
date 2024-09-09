const products = [
  { name: "shampoo", price: 300, quantity: 5 },
  { name: "Chiruni", price: 100, quantity: 2 },
  { name: "Shirt", price: 500, quantity: 3 },
  { name: "Pant", price: 1200, quantity: 1 },
];

function cartTotal(products) {
  let total = 0;
  for (let product of products) {
    // console.log(product);
    const thisProductCost = product.price * product.quantity;
    total += thisProductCost;
  }
  return total;
}

const shoppingCost = cartTotal(products);
console.log(shoppingCost);
