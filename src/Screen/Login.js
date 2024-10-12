import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import Navbar from '../Components/Navbar'
const Login = () => {
  const[credenditail,setCredenditail]=useState({email:"",password:""})
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
     e.preventDefault();
     const response = await fetch("http://localhost:4000/api/loginuser",{
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({email:credenditail.email,password:credenditail.password})
     })
     const json =await response.json()
      console.log(json);
      if(!json.success){
        alert("Enter valid credentials")
      }
      if(json.success){
        localStorage.setItem("userEmail",credenditail.email)
        localStorage.setItem("authToken",json.authToken)
        console.log(localStorage.getItem("authToken"));
       navigate("/")
      }
  }
  const onchange  = (event) =>{
      setCredenditail({...credenditail,[event.target.name]:event.target.value})
      
  }
 
  return (
    <>
       <div style={{backgroundImage: 'url("https://images.pexels.com/photos/326278/pexels-photo-326278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', height: '100vh', backgroundSize: 'cover' }}>
        <div>
        <Navbar/>
        </div>
       <div className='container'>
      <form className='w-50 m-auto mt-5 px-3 py-3 border  border-success rounded'style={{backgroundColor:" rgb(2, 71, 128)"}} onSubmit={handleSubmit}>
  
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={credenditail.email} onChange={onchange}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={credenditail.password} onChange={onchange}/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/createuser" className='m-3 btn btn-danger'>I'm  a New User</Link>
</form>
</div>
    </div>
    </>
  )
}

export default Login
