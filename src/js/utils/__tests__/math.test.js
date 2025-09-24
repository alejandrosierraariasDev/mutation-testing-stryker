const { calculateTax } = require('../math');

describe('calculateTax', () => {
    test('should apply 21% tax for prices over 100', () => {
        const tax = calculateTax(200, false);
        expect(tax).toBe(242);
    });

    // This test is missing. Without it, the mutant in the `price <= 100` branch will survive.
    // test('should apply 10% tax for prices 100 or less', () => {
    //   const tax = calculateTax(50, false);
    //   expect(tax).toBe(55);
    // });

    // This test is missing. Without it, the mutant in the `isTaxExempt` branch will survive.
    // test('should not apply tax if product is tax exempt', () => {
    //    const tax = calculateTax(100, true);
    //    expect(tax).toBe(100);
    // });
});