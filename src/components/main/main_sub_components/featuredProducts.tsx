
import React from 'react'
import ProductCard from '../productCard/productCard'


const FeaturedProducts = ({ heading, top }: any) => {
    console.log(top)
    const [productCategories, setProductCategories] = React.useState()
    const [productsOfCategories, setProductsOfCategories] = React.useState()


    const url = " https://dummyjson.com/products"
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
        <section className={`w-[1439px] h-[638px] absolute top-[${top}px] left-[63px]  mt-[46px]`}>
            <h1 className='font-bold text-[30px] leading-[45px] '>{heading}</h1>
            <div className='flex'>
                {
                    products.map((item: any) => {
                        console.log(item)
                        return (
                            <ProductCard {...item} key={item.id} />
                        )
                    })


                }
            </div>

        </section>
    )
}

export default FeaturedProducts
