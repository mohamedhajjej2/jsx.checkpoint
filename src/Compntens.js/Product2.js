import React from 'react'

function Product2() {
    const product ={
        img :"https://ciseco-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsport-6.dc206a4b.png&w=750&q=75",
        name : "Manhattan Toy WRT",
        price : "30dt",
        description : "New design 2023 ",
        
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

export default Product2