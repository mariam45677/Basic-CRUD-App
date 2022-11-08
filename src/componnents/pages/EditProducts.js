import React from "react";
import  { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function EditProducts(){
let {productsId} =useParams();
const def ={
    title:"",
    price:"", 
}
const [state,setState] = useState( def );
let navigate =useNavigate();
const submit =(e)=>{
    e.preventDefault()
    axios.put(`http://localhost:9000/products/${productsId}`, {
      ...state
    })
    .then((data)=>{
       
        navigate('/products');
    })
}
        useEffect(() =>{
            fetch(`http://localhost:9000/products/${productsId}`)
            .then((res)=> res.json())
            .then((data)=>{
                setState({...data});
            })      
        }, [])
        const handelChange = (e)=> {
            setState({
                ...state,
                [ e.target.name]:e.target.value })}

   
    return(
        <React.Fragment>
            <form onSubmit={submit} >
            <div className="mb-3">
            <label htmlFor="validationCustom01" className="form-label">Title</label>
    <input  type="text"
     name="title"
     className="form-control" 
     id="validationCustom01" 
     value={state.title} 
     onChange={ handelChange }
     /> 
        </div>
       
        <div className="mb-3">
        <label htmlFor="validationCustom01" className="form-label">Price</label>
    <input type="text"
     className="form-control" 
     id="validationCustom01"
     name="price"
     value={state.price} 
     onChange={ handelChange }
    />
        </div>
  <button type="submit" className="btn btn-primary">EditProduct</button>
</form>

 
        </React.Fragment>
        

    )
}
export default EditProducts;