import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';

import {useCart} from '../Components/ContextReducer'
import './Navbar.css';
import Modal from '../Modal';
import Cart from '../Screen/Cart';
const Navbar = () => {
  const[cartview,setCartview]=useState(false);
  let data = useCart();
  const navigate = useNavigate();
  const handleLogout=()=>{
      localStorage.removeItem('authToken');
      navigate('/login')
  }
  const loadCart = () => {
    setCartview(true)
}

  
  return (
    <div>
     <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">CS-Food</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))? <li className="nav-item">
          <Link className="nav-link active " aria-current="page" to="/myorder">My Order</Link>
        </li>:""}
       
      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>
     
          <Link className="btn bg-white mx-1" to="/login">Login</Link>
        
        
          <Link className="btn bg-white mx-1" to="/createuser">Signup</Link>
      
      </div>

      :<div>
      <div className='btn bg-white mx-1 ' onClick={loadCart}>My Cart <Badge  pill style={{backgroundColor:" rgb(2, 71, 128)"}}>{data.length}</Badge></div>
      {cartview?<Modal onClose={()=>{setCartview(false)}}><Cart/></Modal>:null}
      <div className='btn bg-white mx-1' onClick={handleLogout}>Logout</div></div>
      }
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
