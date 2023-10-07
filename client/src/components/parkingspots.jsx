import React,{useState} from 'react';

import { Modal, Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';

function Parkingspots({ park }) { 

  const [show, setShow] = useState(false);



  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);// Use destructuring to access the 'park' prop

  return (

    <div  className='card '> 

      <div className="card-title " font>
      <h1>Spot details</h1>
     <p>Address:{park.address}</p>
     <p>City:{park.city}</p>
    

     <h2>Spot Specifications</h2>
     <p>slotnumber:{park.slotnumber}</p>
     <p>date:{park.date}</p>
     <p>price:{park.price}</p>
     </div >

     

      <div style={{float:"center"}}>

         <Link to={`/book/${park._id}`}>

        <button className='btn btn-primary '> book now</button>

        </Link>

        <button className='btn btn-primary' onClick={handleShow}>show Coordinates</button>

      </div>

      



      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>

          <Modal.Title>COORDINATES</Modal.Title>

        </Modal.Header>

        <Modal.Body><p><p>latitude:{park.lat}</p>
        <p>longitute:{park.long}</p></p>
        <p>Insert these values in your Google Maps To get Precise location</p></Modal.Body>

        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>

            Close

          </Button>

          <Button variant="primary" onClick={handleClose} href=''>

            Proceed

          </Button>

        </Modal.Footer>

      </Modal>

    </div>

  );

}



export default Parkingspots;