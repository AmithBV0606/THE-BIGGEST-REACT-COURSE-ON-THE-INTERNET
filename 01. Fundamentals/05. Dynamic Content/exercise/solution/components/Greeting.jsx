import React from 'react'

const greet = "Good Morning!";
const currDate = new Date();


const ProductInfo = () => {
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date : {currDate.getDate()}</p>
    </div>
  )
}

export default ProductInfo