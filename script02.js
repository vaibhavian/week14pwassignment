function calculateCartValue(...prices) {
    const total = prices.reduce((sum, price) => sum + price, 0);
    return `The total cart value is ${total}`;
}


console.log(calculateCartValue(125, 20, 30)); // Output: The total cart value is 175