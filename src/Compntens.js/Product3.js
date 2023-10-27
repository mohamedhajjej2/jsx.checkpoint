import React from 'react'

function Product3() {
    const product ={
        img :"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F8.e395a7b8.png&w=828&q=75",
        name : "Ella Leather Tote",
        price : "145dt",
        description : " Cream pink",
        
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

export default Product3