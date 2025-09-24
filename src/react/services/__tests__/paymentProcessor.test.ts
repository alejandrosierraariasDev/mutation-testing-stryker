import { PaymentProcessor } from '../paymentProcessor';

describe('PaymentProcessor', () => {
    it('should return FAIL for amount under 1000', () => {
        const processor = new PaymentProcessor();
        expect(processor.processPayment(500, "1111222233334444")).toBe("FAIL");
    });
});