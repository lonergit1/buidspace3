const prices = [1000, 2500, 5000, 7500, 10000];
const discountedPrices = prices.map((price) => price * 0.9);
const pricesAbove5000 = prices.filter((price) => price > 5000);
const pricesBelow5000 = prices.filter((price) => price < 5000);
const sortedPrices = [...prices].sort((a, b) => a - b);

console.log("Original prices:");
console.log(prices);

console.log("Prices after 10% discount:");
console.log(discountedPrices);

console.log("Prices above 5000:");
console.log(pricesAbove5000);

console.log("Prices below 5000:");
console.log(pricesBelow5000);

console.log("Prices sorted from low to high:");
console.log(sortedPrices);




// .map() creates a new array by applying a function to every element in the original array.
// .filter() creates a new array containing elements that satisfies a specific condition
// .sort() arranges element in an array in a specific order