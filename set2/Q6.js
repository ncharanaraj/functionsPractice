/**Write an ES6 function which filters out the products which have a price greater than 40. */

const productData = [
  { prodName: "Dairy Milk", price: 10 },
  { prodName: "Dairy Milk Silk", price: 70 },
  { prodName: "Five Star", price: 20 },
  { prodName: "Mars", price: 50 },
];
// Your code here

const getProducts = (products, price) =>
  products.filter((product) => product.price > price);
console.log(getProducts(productData, 40));
