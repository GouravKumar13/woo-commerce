import React from 'react'

const ProductCard = ({ title, thumbnail, price, brand }: any) => {
    console.log(title)
    return (
        <div className=' w-[332px] h-[456px] mt-[74px] rounded-[27px] shadow-lg mx-3 p-1'>
            <img src={thumbnail} alt="hii will be th img" className='w-full object-contain h-[281px] rounded-[27px] ' />
            <h2 className='font-bold text-[18px] leading-[27px] ml-[18px] '>{title}</h2>
            <p className='font-semibold text-[13px] leading-[19.5px] ml-[18px] mt-[10px] '>{brand}</p>

            <div className='flex justify-between items-center mt-[24px] ml-[18px]'>
                <p className='font-bold text-[20px] leading-[30px] '>
                    <span className='text-red'>{price} </span>
                    <span>💲</span>
                </p>
                <img src={require("../../../Assets/Other icons/add to cart.png")} alt='Add to cart' className='w-[54px] h-[54px]' />

            </div>

        </div>
    )
}

export default ProductCard
