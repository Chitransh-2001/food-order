import React, { useState } from 'react'
import {useNavigate, Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

const Signup = () => {
  const[credenditail,setCredenditail]=useState({name:"",email:"",password:"",geolocation:""})
  
  let navigate = useNavigate()

  
   
  const handleSubmit = async(e)=>{
     e.preventDefault();
     const response = await fetch("http://localhost:4000/api/createuser",{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({name:credenditail.name,email:credenditail.email,password:credenditail.password,location:credenditail.geolocation})
     })
     const json =await response.json()
      console.log(json);
      if (json.success) {
        //save the auth toke to local storage and redirect
        localStorage.setItem('token', json.authToken)
        navigate("/login")
  
      }
      else {
        alert("Enter Valid Credentials")
      }
  }
  const onchange  = (event) =>{
      setCredenditail({...credenditail,[event.target.name]:event.target.value})
      
  }
  return (
    <>
     <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
    <div>
    <Navbar/>
    </div>
    <div className='container'>
      <form className='w-50 m-auto mt-2  py-2 px-3 border  border-success rounded' style={{backgroundColor:"rgb(2, 71, 128)"}} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label fw-bold">Name</label>
    <input type="text" className="form-control" name='name' value={credenditail.name} onChange={onchange} />
  
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credenditail.email} onChange={onchange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credenditail.password} onChange={onchange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label fw-bold">Address</label>
   
                <input type="text" className="form-control" name='geolocation'  value={credenditail.geolocation} onChange={onchange}  />
             
  </div>
 
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 btn btn-danger'>Already a User</Link>
</form>
</div>
</div>
    </>
  )
}

export default Signup
