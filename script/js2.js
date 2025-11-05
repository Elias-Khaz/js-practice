let price = prompt("Enter a price tag ($49.99)")

price = price.slice(1)

price = Number(price);

let discountedPrice = price * 0.9;

console.log(`Your new price is: ${discountedPrice.toFixed(2)}`)