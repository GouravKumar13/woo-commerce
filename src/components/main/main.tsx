import React from 'react'
import HeroSection from './main_sub_components/heroSection'
import FeaturedProducts from './main_sub_components/featuredProducts'
import LimitedOffer from './main_sub_components/limitedOffer'

const Main = () => {
    return (
        <div>
            <HeroSection />
            <FeaturedProducts heading={"FeaturedProducts"} top={751} />
            <LimitedOffer />
            {/* <FeaturedProducts heading={"Latest Products"} top={1926} /> */}
        </div>
    )
}

export default Main
