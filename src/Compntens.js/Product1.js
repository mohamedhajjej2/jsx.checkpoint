import React from 'react'

function Product1() {
    const product ={
img :"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.addcba21.png&w=750&q=75",
name : "Leather Gloves",
price : "42dt",
description : "Prefect mint green ",

    }
  return (
    <div className='card'>
        <img src={product.img}></img>
        <h5>{product.name}</h5>
        <p>{product.description}</p>
        <p>{product.price}</p>
    
    </div>
  )
}

export default Product1