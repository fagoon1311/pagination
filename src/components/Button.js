import React from 'react'

const Button = ({count, onPress}) => {
    const buttarr = Array.from({ length: count }, (_, index) => index + 1)
    const handleClick = (value) =>{
        onPress(value)
    }
    
  return (
    <div className='flex justify-center'>
    {
        buttarr.map((value)=>(<button key={value} className='p-2' onClick={()=>handleClick(value)}>{value}</button>))
    }
    </div>
  )
}

export default Button