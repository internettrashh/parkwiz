import React, { useEffect, useState } from 'react';

import axios from 'axios';

import Parkingspots from '../components/parkingspots.jsx'; // Corrected import path
import Loader from '../components/Loader.jsx';
import Error from '../components/Error.jsx';





function Homescreen() {

  const [parking, checkParkings] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);



  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const data = (await axios.get('/api/parking/getallparkings')).data;

        checkParkings(data);

        setLoading(false);

      } catch (error) {

        setError(true);

        console.error(error);

        setLoading(false);

      }

    };



    fetchData();

  }, []);



  return (

    <div>

      <div className='row'>

        {loading ? (

          <h1><Loader/></h1>

        ) : error ? (

          <h1><Error/></h1>

        ) : (

          parking.map((park) => (

            <div className='com-md-9' key={park.id}>

              <Parkingspots park={park} />

            </div>

          ))

        )}

      </div>

    </div>

  );

}



export default Homescreen;













