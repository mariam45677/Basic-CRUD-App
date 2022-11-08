import React from "react";
import { useParams } from "react-router-dom";
import  { useEffect,useState } from "react";
function ProductsDetails(){
    let {productsId} =useParams();
    const [product,setproduct] = useState([]);

    useEffect(() =>{
        fetch(`http://localhost:9000/products/${productsId}`)
        .then((res)=> res.json())
        .then((product)=>{
            setproduct(product);
        })
    }, [])
    

    return(
        <React.Fragment>
      {product && <h1> {product.title},{product.price} </h1>}
        </React.Fragment>
    )
}
export default ProductsDetails;