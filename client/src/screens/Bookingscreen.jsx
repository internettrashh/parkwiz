import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FakePayment from "../components/fakepay"; // Import the FakePayment component
import Parkingspots from "../components/parkingspots";

function Bookingscreen() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [spot, setSpot] = useState(null);

  let { spotid } = useParams();

  // Use state to control the rendering of the FakePayment component
  const [showFakePayment, setShowFakePayment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Make sure your API endpoint is correctly configured to return spot details by spotid
        const response = await axios.get(`/api/parking/getspotbyid/${spotid}`);

        setSpot(response.data); // Assuming the response is an object with spot details
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [spotid]);

  const handlePaymentClick = () => {
    // Set showFakePayment to true to render the FakePayment component
    setShowFakePayment(true);
  };

  return (
    <div >
      <h1>Book screen</h1>
      <h1>Spot id = {spotid}</h1>
      <button onClick={handlePaymentClick}>Pay here</button>

      {/* Conditionally render the FakePayment component */}
      {showFakePayment && <FakePayment />}
    </div>
  );
}

export default Bookingscreen;
