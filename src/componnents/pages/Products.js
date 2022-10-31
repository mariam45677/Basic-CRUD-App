import React, { useEffect,useState } from "react";
import { Link} from "react-router-dom";
import Swal from 'sweetalert2'
import './product.css'

function Products (){
    const [products,setproducts] = useState([]);

    useEffect(() =>{
      getallproducts();
        
    }, [])
    const getallproducts =()=>{
      fetch('http://localhost:9000/products')
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            setproducts(data);
        })

    }
    const deleteproduct =(product)=>{
      Swal.fire({
        title:`are you sure To delete ${product.title} ?`,
        showCancelButton:true,
      }).then((data)=> {
        if(data.isConfirmed){
          fetch(`http://localhost:9000/products/${product.id}` ,{
            method :"DELETE",
          })
          .then((res)=> res.json())
          .then(()=>{
            getallproducts();
              
          })
          
        }
      })
       
  

    }
  
  

    return(
        <React.Fragment>
        <h1> products page</h1>
        <Link to={'/products/add'}  className="btn btn-success mt-3">Add new Products</Link>
        <table className="table mt-5 details">
  <thead>
    <tr  >
      <th >Id</th>
      <th >Title</th>
      <th >Description</th>
      <th >Price</th>
      <th >Opertions</th>
    
     
    </tr>
  </thead>
  <tbody>
    {products.map((product) =>{
        return(
            <tr key={product.id}>
      
            <td>{product.id}</td>
           <td>{product.title}</td>
           <td>{product.description}</td>
           <td>{product.price}</td>
          
           <td>
              <button className="btn btn-danger btn-sm" onClick={()=> deleteproduct(product)}>Delete</button>
          <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">view</Link>
              <button className="btn btn-primary btn-sm">Edit</button>
            
           </td>
          </tr>

        )
    })}
  
  </tbody>
</table>
</React.Fragment>
    )
}
export default Products;