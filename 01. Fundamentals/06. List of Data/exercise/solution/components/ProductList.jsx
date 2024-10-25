import React from 'react'

const products = [
  { id: 1, name: "Phone", price: "$699" },
  { id: 2, name: "Laptop", price: "$1200" },
  { id: 3, name: "Headphones", price: "$199" },
];

const ProductList = () => {
  return (
    <div>
      {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList