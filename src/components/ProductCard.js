import React from 'react'

const ProductCard = ({ info }) => {
    const {title, description, price, thumbnail} = info
  return (
    <div className='border w-96 h-96 bg-blue-300 p-2 m-2 rounded-lg'>
        <img src={thumbnail} alt="productImage" className='h-2/3 justify-center mx-auto'></img>
        <h1 className='text-center font-bold'>{title}</h1>
        <p className='text-sm text-pink-50'>{description}</p>
        <h4 className='font-bold'>${price}</h4>
    </div>
  )
}

export default ProductCard