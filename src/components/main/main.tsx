import React from 'react'
import HeroSection from './main_sub_components/heroSection'
import FeaturedProducts from './main_sub_components/featuredProducts'
import LimitedOffer from './main_sub_components/limitedOffer'

const Main = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts />
            <LimitedOffer />
        </div>
    )
}

export default Main
