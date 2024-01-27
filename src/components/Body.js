import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Button from './Button'


const Body = () => {
    const [cardNumber, setCardNumber] = useState(0)
    const [testData, setTestData] = useState([])
    useEffect(()=>{
        getTestData()
    },[])

    const onPress = (count) =>{
      setCardNumber(count-1)
    }


    const getTestData = async() =>{
        const data = await fetch("https://dummyjson.com/products?limit=10")
        const json = await data.json()
        setTestData(json.products)
        // console.log(json)
        // console.log(json.products)
        
    }
  if(testData.length === 0) return null
  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        
         <ProductCard info={testData[cardNumber]}/>
        
      </div>
      <div>
          <Button count={testData.length} onPress={onPress} /> 
      </div>
  </div>
  )
}

export default Body