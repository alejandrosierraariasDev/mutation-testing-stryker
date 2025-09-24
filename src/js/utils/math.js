function calculateTax(price, isTaxExempt) {
    if (isTaxExempt === true) {
        return price;
    }

    if (price > 100) {
        return price * 1.21;
    } else {
        return price * 1.10;
    }
}

module.exports = { calculateTax };