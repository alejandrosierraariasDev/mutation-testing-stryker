export class PaymentProcessor {
    /**
     * Procesa un pago y devuelve un estado.
     * @param amount El monto del pago.
     * @param creditCard El número de tarjeta de crédito.
     */
    processPayment(amount: number, creditCard: string): string {
        if (amount <= 0) {
            return "ERROR: invalid amount";
        }

        // Esta es la lógica con el fallo sutil.
        if (amount > 1000 && creditCard.length === 16) {
            return "SUCCESS";
        }

        return "FAIL";
    }
}