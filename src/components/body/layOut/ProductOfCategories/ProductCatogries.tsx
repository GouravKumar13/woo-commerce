import React ,{ useEffect, useState } from 'react'


const ProductCatogries = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{},[])

    const getProductsWithCategories = async()=>{
        const responce =  await fetch(`'https://dummyjson.com/products/category/smartphones`)
        const json = await responce.json()
        console.log(json)
        setProducts(json)
    }
  return (
    <div>
      
    </div>
  )
}

export default ProductCatogries
