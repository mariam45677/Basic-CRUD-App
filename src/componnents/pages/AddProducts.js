import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function AddProducts(){
    const [title,setTitle]=useState("");
    const [price,setprice]=useState(0);
    let navigate =useNavigate();
    const submit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:9000/products", {
            title,
            price,
        })
        .then((data)=>{
            console.log(data);
            navigate('/products');
        })
    }
    return(
        <>
        <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
          <input type="text" className="form-control" 
          id="exampleInputEmail1"
           aria-describedby="product title" 
          placeholder="product title"
          onChange={(e)=>
            setTitle(e.target.value)
          }
          />
        
        </div>
        <div class="mb-3">
          <label htmlFor="productprice" className="form-label">price</label>
          <input type="text" className="form-control" 
          id="productprice" 
          aria-describedby="product price" 
          placeholder="product price"
          onChange={(e)=>
            setprice(e.target.value)
          }
          />
        
        </div>
      
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
      </>
    )
}

export default AddProducts;