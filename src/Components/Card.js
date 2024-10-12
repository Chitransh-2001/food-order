import React, { useEffect, useRef, useState } from 'react'
import {useCart,useDispatchCart} from './ContextReducer'
import './Card.css';
const Card = (props) => {
  let options =props.options;
  let priceOptions=Object.keys(options)
  let dispatch=useDispatchCart();
  const priceRef = useRef();
  let data=useCart();
  let foodItem = props.foodItem;
  const[qty,setQty]=useState('1');
  const[size,setSize]=useState("")
  const handleAddtoCart =async()=>{
        let food =[]
        for(const item of data){
          if(item.id===props.foodItem._id){
            food=item;
            break;
          }
        }
        if(food !==[]){
           if(food.size===size){
            await dispatch({type:"UPDATE",id:foodItem._id,price:finalPrice,qty:qty})
            return
           }
        
        else if(food.size !==size){
          await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
          return
        }
        return
      }
     await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
      
    }
    let finalPrice=qty*parseInt(options[size]);
    useEffect(()=>{
      setSize(priceRef.current.value)
    },[])
  return (
    <div >
       <div className="card mt-3 view" style={{width: "18rem", "maxHeight":"360px", "border":"1px solid  rgb(2, 71, 128)"}}>
  <img src={props.foodItem.img} className="card-img-top" alt="..." style={{height:"150px", objectFit:"fill"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.foodItem.name}</h5>
    
   <div className='container w-100  ' >
    <select className='m-2 h-100   rounded' style={{backgroundColor:"rgb(2, 71, 128)"}} onClick={(e)=>setQty(e.target.value)}>
      {Array.from(Array(6),(e,i)=>{
        return(
              <option key={i+1} value={i+1}>{i+1}</option>
        )
      })}
    </select>
    <select className='m-2 h-100   rounded' ref={priceRef} style={{backgroundColor:"rgb(2, 71, 128)"}} onChange={(e)=>setSize(e.target.value)}>
      
      {priceOptions.map((data)=>{
       return <option key={data} value={data}>{data}</option>
      })}
    </select>
    <div className='d-inline fs-5'>₹{finalPrice}/-</div>
   </div>
  </div>
  <hr>
  </hr>
  <button className='btn justify-center  cart' onClick={handleAddtoCart}>Add to Cart</button>
</div></div>
   
  )
}

export default Card
