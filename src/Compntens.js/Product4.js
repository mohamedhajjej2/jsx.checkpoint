import React from 'react'

function Product4() {
    const product ={
        img :"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F9.6769bc98.png&w=828&q=75",
        name : "Wool Coshmere Jacket",
        price : "12dt",
        description : "Matte black ",
        
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

export default Product4