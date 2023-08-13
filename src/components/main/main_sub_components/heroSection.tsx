import React from 'react'

const HeroSection = () => {
    return (
        <div className="w-[full] h-[741px] z-0 absolute top-[50px]">
            <img src={require('../../../Assets/Other icons/bg.png')} alt="bg" className='h-[705px] w-[1993px] object-cover relative ' />
            <section className='absolute top-11 z-20'>
                <div className='mt-[332px] ml-[120px] w-[609px] h-[203px]'>
                    <h1 className=' font-bold text-[41px] leading-[61.5px] '>Shop Smarter ,Not Harder!</h1>
                    <p className='font-normal text-[17px] leading-[25.5px] mt-[21px]'>Success isn’t always about greatness. It’s about consistency. Consistent<br />
                        hard work gains success. Greatness will come.</p>
                    <button className='bg-red text-white rounded-[55px] w-[169px] h-[41px] text-[15px] leading-[22.5px] font-medium drop-shadow-lg mt-[27px] relative'>Explore Now <img src={require('../../../Assets/Other icons/Arrow 1.png')} alt="arrow" className='absolute w-[23px] top-[18px] right-[15px]  ' /></button>
                </div>
                <img src={require('../../../Assets/Other icons/3-ladies.png')} alt="3 ladies" className='w-[424.1px] h-[501px]  drop-shadow-2xl absolute top-[157px] left-[839.9px]  ' />
            </section>
        </div>
    )
}

export default HeroSection
