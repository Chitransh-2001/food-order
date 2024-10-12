import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'


const Home = () => {
  const[search,setSearch]=useState('');
  const[foodCat,setFoodCat]=useState([]);
  const[foodItem,setFoodItem]=useState([]);
const loadData = async()=>{
  let Response = await fetch("http://localhost:4000/api/fooddata",{
    method:"post",
    headers:{
      'Content-type':'application/json'
    }

  })
  Response = await Response.json();
 
  setFoodItem(Response[0]);
  setFoodCat(Response[1]);
}

useEffect(()=>{
  loadData();
},[])
  return (
    <>
      <div><Navbar/></div>
      <div> <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain"}}>
  <div className="carousel-inner">
    <div className="carousel-caption" style={{zIndex:10}}>
    <div class="d-flex justify-content-center">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      
    </div>
    </div>
    <div className="carousel-item active">
      <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZmFzdCUyMGZvb2R8ZW58MHx8MHx8fDA%3D" className="d-block w-100 " alt="..." style={{height:"500px",filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1586816001966-79b736744398?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc3QlMjBmb29kfGVufDB8fDB8fHww" className="d-block w-100 " alt="..." style={{height:"500px",filter:"brightness(30%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="https://media.istockphoto.com/id/1194530915/photo/freshly-cooked-indian-popular-famous-snacks-samosa.webp?b=1&s=170667a&w=0&k=20&c=MnrXOOVV0EZF7QIwk6nCkHMD-Y9-dMCfBXDaseYRhHg=" className="d-block w-100 " alt="..." style={{height:"500px",filter:"brightness(30%)"}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  
  </button>
</div></div>
     <div className='container'>
      {
        foodCat !== [] 
        ? foodCat.map((data)=>{
           return(
            <div className='row mb-3 '>
            <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
            <hr/>
            {foodItem !==[] 
            ? 
            foodItem.filter((item)=>(item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
            .map(filterItem =>{
             return(
              <div key={filterItem._id} className='col-12 col-md-6 col-lg-3 m-2'>
                <Card foodItem ={filterItem}
                  options={filterItem.options[0]}
                  
                ></Card>
              </div>
             )
            
            }
        ):<div> No  Such Data Found</div>}
        </div>
           );
        }): <div>"no CategoryName"</div>}
    
    </div>
      <Footer/>
    </>
  );
};

export default Home
