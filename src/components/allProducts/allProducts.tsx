import React from 'react'
import { url } from '../../config'

const AllProducts = () => {

    const [allProducts, setAllProducts] = React.useState()
    React.useEffect(() => {
        getAllProducts()
    }, [])


    async function getAllProducts() {
        const allProducts = await fetch(url + "?limit=28&skip=10")
        const allProductsData = await allProducts.json()
        setAllProducts(allProductsData)
    }

    if (allProducts === undefined) return null
    const products: any = (Object.values(allProducts)[0])
    return (
        <section className='w-[1009px] h-[2035.99px] absolute top-[153px]  right-[63px]' >
            <h1 className='font-bold text-[30px] leading-[45px] '>All Products</h1>
            <div className='flex flex-wrap gap-3 '>
                {
                    products.map((item: any) => {
                        console.log(item)
                        return (
                            <div className=' w-[216px] h-[317px]  rounded-[27px] shadow-lg  m-2'>
                                <img src={item.thumbnail} alt="hii will be th img" className=' h-[200.76px] w-full object-contain  rounded-[27px] ' />
                                <h2 className='font-bold text-[16px] leading-[24px] ml-[18px] '>{item.title}</h2>
                                {/* <p className='font-semibold text-[11px] leading-[16.5px] ml-[18px] mt-[10px] '>{item.brand}</p> */}

                                <div className='flex justify-around items-center mt-[24px] ml-[18px] bottom-[29px]'>
                                    <p className='font-bold text-[16px] leading-[24px] '>
                                        <span className='text-red'>{item.price} </span>
                                        <span>💲</span>
                                    </p>
                                    <img src={require("../../Assets/Other icons/add to cart.png")} alt='Add to cart' className=' w-[35.26px] h-[35.26px]' />

                                </div>

                            </div>
                        )
                    })


                }
            </div>
        </section>

    )
}

export default AllProducts
