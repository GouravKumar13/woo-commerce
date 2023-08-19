import React from 'react'

const LimitedOffer = () => {
    return (
        <div className='w-full h-[404px] absolute top-[1426px] bg-blackP bg-opacity-25 mt-[80px]  '>
            <img src={require("../../../Assets/Other icons/Limiter offer.png")} className='w-full h-full object-cover  ' alt="" />
            <div className=' absolute top-[60px] left-[114px] text-white '>
                <p className='font-bold text-[17px] leading-[25.5px]'>LIMITED OFFER</p>
                <p className='font-semibold text-[50px] leading-[75px] '><span className='text-red'>35%</span> Off only this friday<br />
                    and get special gift</p>
                <button className='bg-red text-white rounded-[55px] w-[169px] h-[41px] text-[15px] leading-[22.5px] font-medium drop-shadow-lg mt-[42px] relative'>Grab it Now <img src={require('../../../Assets/Other icons/Arrow 1.png')} alt="arrow" className='absolute w-[23px] top-[18px] right-[15px]  ' /></button>
            </div>

        </div>
    )
}

export default LimitedOffer
