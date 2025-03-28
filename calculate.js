function calculateTotal(price, discount) {
    return Math.round(price - (price * discount));
}

console.log(calculateTotal(100, 0.1));
