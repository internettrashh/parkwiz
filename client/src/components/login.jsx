import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post ('http://localhost:3000/login',{email,password})
    .then(result => {console.log(result) 
      if(result.data === "Success")
      {
        navigate('/home')
      }
    })
    .catch(err => console.log(err))
     
   };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
