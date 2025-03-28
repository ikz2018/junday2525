function calculateTotal(price, discount, tax) {
    let total = price - (price * discount);
    return total + (total * tax);
}

console.log(calculateTotal(100, 0.1, 0.2));
