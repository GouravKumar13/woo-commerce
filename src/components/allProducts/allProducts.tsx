import React from 'react'
import { url } from '../../config'

const AllProducts = () => {

    const [allProducts, setAllProducts] = React.useState()
    const [categories, setCategories] = React.useState<any[]>()
    const [selectedCategories, setSelectedCategories] = React.useState("")
    const [selected, setSelected] = React.useState("")

    React.useEffect(() => {
        getAllProducts()
    }, [selectedCategories])


    async function getAllProducts() {
        try {
            setSelected(`/category/${selectedCategories}`)
            const allProducts = await fetch(url + (selectedCategories.length > 0 ? selected : "") + "?limit=24&skip=0")
            const allProductsData = await allProducts.json()
            setAllProducts(allProductsData)

            const allCategories = await fetch(url + "/categories")
            const allCategoriesData = await allCategories.json()
            setCategories(allCategoriesData)
        }
        catch (error) {
            console.log(error)
        }
    }



    if (allProducts === undefined) return null
    if (categories === undefined) return null
    const products: any = (Object.values(allProducts)[0])



    return (
        <main>
            <section className='rounded-r-[86px] drop-shadow-xl  w-[187px] h-[662px] top-[449px] absolute left-0 bg-[#F4F4F4] pl-[25px] '>
                <h1 className='font-bold text-[22px] leading-[33px] mt-[63px] cursor-pointer '> Categories</h1>
                <div className='text-[14px] font-medium leading-[21px] flex flex-col gap-1 mt-[16px]'>

                    {
                        categories.map((item) => {
                            return (

                                <li key={item} onClick={(e: any) => setSelectedCategories(e.target.textContent)} className='visited:text-red cursor-pointer'>{item}</li>

                            )

                        }
                        )


                    }
                </div>

            </section>
            <section className='w-[1009px] h-[2035.99px] absolute top-[153px]  right-[63px]' >
                <h1 className='font-bold text-[30px] leading-[45px] ' >All Products</h1>
                <div className='flex flex-wrap gap-3 mt-[64px] '>

                    {
                        products.map((item: any) => {
                            return (
                                <div key={item.id} className=' w-[216px] h-[317px]  rounded-[27px] shadow-lg  m-2'>
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
        </main>


    )
}

export default AllProducts
