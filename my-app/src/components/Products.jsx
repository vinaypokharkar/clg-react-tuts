import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {
  const[productsDetails, setProductDetails] = useState([])

  useEffect(() => {
    const fetchProducts = async ()=>{
      try{
        const response = await(fetch("https://fakestoreapi.in/api/products"))
        // console.log(response)
        const data = await response.json()
        if(data.status === "SUCCESS") {
          setProductDetails(data.products)
          console.log(data)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchProducts()
  }
  ,[])

  return (

    <div className="d-flex flex-wrap">
    {productsDetails.map((product) => (

  <div className="card" style={{width: '18rem'}}>
    <img src={product.image}className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{product.title}</h5>
      <p className="card-text">{product.description}</p>
      <a href="#" className="btn btn-primary">Shop here</a>
    </div>
  </div>
      
    ))}
  </div>
  )
}

export default Products
