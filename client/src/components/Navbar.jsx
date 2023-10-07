
import React from 'react'
import Login from './login'


function Navbar() {

  return (

    <div>

      <nav class="navbar navbar-expand-lg ">

        <a class="navbar-brand" href="#">PARK-WIZ</a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

          <span class="navbar-toggler-icon"></span>

        </button>

        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav">

           

            <li class="nav-item active">

              
              <a class="nav-link" href="/home">Parking Spots </a>
           
            </li>

            <li class="nav-item active">

              <a class="nav-link" href="/currentBookings">Current Bookings </a>

            </li>


            <li class="nav-item active">

              <a class="nav-link" href="/signup">Sign UP </a>

            </li>

            <li class="nav-item">

              <a class="nav-link" href="/login" >Login</a>

            </li>



          </ul>

        </div>

      </nav>

    </div>

  );

}



export default Navbar

