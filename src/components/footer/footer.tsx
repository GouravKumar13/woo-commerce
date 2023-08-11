import React from 'react'

const footerData = {

  usefulLinks: {
    title: 'Useful Links',
    links: ["Contact us", "FAQs", "Terms & Conditions", "Privacy Policy", "Shipping & Return Policy", "Blog", "Sitemap"],
    id: "usefulLinks"
  },
  AboutUS: {
    title: 'About Us',
    links: ["About us", "Contact us", "FAQs", "Terms & Conditions", "Blog", "Sitemap"],
    id: "usefulLinks"
  },
  "categories": {
    title: 'Categories',
    links: ["Men", "Women", "Kids", "Watches", "Perfumes", "Handbags", "Beauty", "Accessories", "Electronics", "Home & Living", "Gifts",],
    id: "categories"
  },
  "contactUs": {
    title: 'Contact Us',
    links: ["Ph: +91 21 111 112 111", "Address: , 3rd Floor, Block-9, Delhi , India", "Email: admin@gmail.com"]
  }
}




const Footer = () => {
  return (
    <div className=' w-full border-b-2  bottom-0 flex  justify-around  '>
      {

        Object.values(footerData).map((data) => {

          return (
            <div className=' ' key={data.title}>
              <h1 className=' text-lg text-slate-700 font-medium'>{data.title}</h1>
              <ul>
                {data.links.map((link) => {
                  return (
                    <li className=' cursor-pointer hover:text-fuchsia-700 font-thin' key={link}>{link}</li>
                  )
                })
                }
              </ul>
            </div>
          )

        })

      }

    </div>
  )
}

export default Footer
