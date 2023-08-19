import React, { useState, useEffect } from 'react'

const useProductData = () => {
    const [allProducts, setAllProducts] = useState({})


    const url = " https://dummyjson.com/products/categories"

    useEffect(() => {
        getAllProducts()
    }, [])
    const getAllProducts = async () => {
        const data = await fetch(url)
        const json = await data.json()
        console.log(json)
        setAllProducts(json)



    }
    return allProducts
}

export default useProductData
