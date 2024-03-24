import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/stripe';

export const PaymentService = {
  async initiatePayment(amount, loadStripe) {
    try {
       const response = await axios.post(`${API_BASE_URL}/stripe`, { amount });
       const secret = response.data.secret;
      const stripe = await loadStripe("pk_test_51O481TImUxx0P9DAFuUKrU4mPWUfjIFYBROmL8wyzfSUR8RNnQJuhbfxcryZO3J6lL2zP9Sm8gkSu4GkhiKllHWg00hIjQ6GRQ");
      return { secret, stripe };
    } catch (error) {
      throw new Error(`Failed to initiate payment: ${error.message}`);
    }
  },

  async createPaymentMethod(stripe, cardElement, billingDetails) {
    const elements = stripe.elements();
    const card = elements.create('card');
    card.mount(cardElement);

    try {
      const paymentMethodReq = await stripe.createPaymentMethod({
        type: 'card',
        card,
        billing_details: billingDetails,
      });
      return paymentMethodReq.paymentMethod.id;
    } catch (error) {
      throw new Error(`Failed to create payment method: ${error.message}`);
    }
  },

  async performPayment(secret, paymentMethodId) {
    try {
      await axios.post(`${API_BASE_URL}/confirm-payment`, {
        secret,
        paymentMethodId,
      });
      // Handle successful payment, e.g., show success message
    } catch (error) {
      throw new Error(`Failed to perform payment: ${error.message}`);
    }
  },
};