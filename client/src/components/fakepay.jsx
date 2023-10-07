import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function FakePaymentPage() {
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  useEffect(() => {
    // Simulate a successful payment after 2 seconds
    const paymentTimeout = setTimeout(() => {
      navigate("/currentBookings"); // Use navigate to redirect to the success page
    }, 3000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(paymentTimeout);
  }, [navigate]);

  return (
    <div>
      <h1>Fake Payment Page</h1>
      <div className="payment-form">
        <h2>Payment Details</h2>
        <form id="paymentForm">
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="1234 5678 9012 3456"
            required
          /><br /><br />
          <label htmlFor="expirationDate">Expiration Date:</label>
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            placeholder="MM/YY"
            required
          /><br /><br />
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            name="cvv"
            placeholder="123"
            required
          /><br /><br />
          <button type="button" className="btn-pay" id="payButton">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}

export default FakePaymentPage;
