const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 }
];

function findMinMaxProducts(products) {
    if (products.length === 0) {
        console.log("No products available.");
        return;
    }

    let minProduct = products[0];
    let maxProduct = products[0];

    products.forEach(product => {
        if (product.price < minProduct.price) {
            minProduct = product;
        }
        if (product.price > maxProduct.price) {
            maxProduct = product;
        }
    });

    console.log(`The product with the Maximum price is ${maxProduct.name} with a price of ${maxProduct.price}.`);
    console.log(`The product with the Minimum price is ${minProduct.name} with a price of ${minProduct.price}.`);
}


findMinMaxProducts(products);
