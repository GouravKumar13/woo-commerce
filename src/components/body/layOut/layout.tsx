import React from 'react'
import Catogries from './catogries/catogries'
import ProductCatogries from './ProductOfCategories/ProductCatogries'
import Banner from './bannerSection/banner'

const Layout = () => {
  return (
    <div >
      <Banner />
      <Catogries />
      <ProductCatogries />

    </div>
  )
}

export default Layout
