import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route,Routes,  Link } from 'react-router-dom';

import Homescreen from './screens/Homescreen.jsx';
import Bookingscreen from './screens/Bookingscreen.jsx';
import Parkingspots from './components/parkingspots';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './screens/SignUp'
import Login from './components/login'
import Currentbooking from './screens/currentbooking'
function App() {
  return (
    <div className="App">
      <Navbar/>

     <BrowserRouter>
     
     <Routes>
     
          <Route path="/signup" element={<SignUp/> }/>
    <Route path="/login" element={<Login/>} />
         
   <Route path="/home" element={<Homescreen />} />
  <Route path="/book/:spotid" element={<Bookingscreen />} />
  <Route path="/currentBookings" element={<Currentbooking />} />
</Routes>

     </BrowserRouter>

    </div>
  );
}

export default App;
