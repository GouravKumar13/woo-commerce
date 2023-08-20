
import React from 'react'
import { url } from '../../../config'


const FeaturedProducts = ({ heading, top }: any) => {

    const [productCategories, setProductCategories] = React.useState()
    const [productsOfCategories, setProductsOfCategories] = React.useState()




    // console.log(url + `/catehory/${productCategories}`)

    React.useEffect(() => {
        getProductCatagories()
    }, [productCategories !== undefined])

    const getProductCatagories = async () => {
        const categoriesData = await fetch(url + "/categories")
        const categories = await categoriesData.json()

        setProductCategories(categories[Math.floor(Math.random() * categories.length)])
        const productOfCategoriesData = await fetch(url + `/category/${productCategories}`)
        const productOfCategories = await productOfCategoriesData.json()
        setProductsOfCategories(productOfCategories)



    }




    if (productsOfCategories === undefined) return null
    const products: any = (Object.values(productsOfCategories)[0])
    return (
        <section className={`w-[1439px] h-[638px] absolute top-[${top}] left-[63px]  mt-[46px]`}>
            <h1 className='font-bold text-[30px] leading-[45px] '>{heading}</h1>
            <div className='flex'>
                {
                    products.map((item: any) => {
                        console.log(item)
                        return (
                            <div className=' w-[332px] h-[455px]  rounded-[27px] shadow-lg  m-2'>
                                <img src={item.thumbnail} alt="hii will be th img" className=' h-[281px] w-full  rounded-[27px] ' />
                                <h2 className='font-bold text-[18px] leading-[27px] ml-[18px] '>{item.title}</h2>
                                <p className='font-semibold text-[13px] leading-[19.5px] ml-[18px] mt-[10px] '>{item.brand}</p>

                                <div className='flex justify-around items-center mt-[24px] ml-[18px]'>
                                    <p className='font-bold text-[20px] leading-[30px] '>
                                        <span className='text-red'>{item.price} </span>
                                        <span>💲</span>
                                    </p>
                                    <img src={require("../../../Assets/Other icons/add to cart.png")} alt='Add to cart' className='w-[54px] h-[54px]' />

                                </div>

                            </div>
                        )
                    })


                }
            </div>

        </section>
    )
}

export default FeaturedProducts

