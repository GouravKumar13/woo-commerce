import React, { useEffect, useState } from 'react'

const Catogries = () => {

  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories()
  }, [])
  const getCategories = async () => {
    const responce = await fetch(`https://dummyjson.com/products/categories`)
    const json = await responce.json()

    setCategories(json)

  }


  return (
    <div className='border border-fuchsia-950 w-fit p-2'>
      {categories.map((category) => {
        return (


          <div className='' key={category}>
            <h1 className='font-serif cursor-pointer'>{category}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Catogries
