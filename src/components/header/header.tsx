import React, { useState } from 'react'

import { Link } from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {

  return (
    <header className='sticky left-0 z-10 top-0 flex w-[full] h-[107px] bg-white justify-between items-center rounded-br-[60px]  drop-shadow-lg' >
      <section className='ml-[64px] '>
        <Link to="/">
          <h1 className=' font-bold text-red text-[28px] leading-[42px] '> E-SHOP</h1>
        </Link>
      </section>

      <section className='ml-[267px] w-[273px] h-[40px] flex items-center  relative '>
        <input type="search" placeholder='Search Products' className='rounded-[50px] text-center drop-shadow-md bg-[#EFEFEF] w-full h-full ' />
        <img src={require('../../Assets/Other icons/search.png')} alt="sdf" className='w-[22.63px]  h-[21.34px] absolute top-[8.9px] left-[22px]' />

      </section>

      <section className='w-[321px] h-[20.2px] ml-[40px] flex gap-[35px] text-[13px] leading-[19.5px] font-medium  '>
        <Link to="/">
          <span>HOME</span>
        </Link>
        <Link to="/AllProducts">
          <span>PRODUCTS</span>
        </Link>
        <span>ABOUT</span>

        <ScrollLink
          to='footer'
          spy={true}
          smooth={true}
          className='cursor-pointer'
        >
          <span>CONTACT</span>
        </ScrollLink>

      </section>

      <section className='flex gap-[39px] ml-[40px] mr-[57px]'>
        <img src={require("../../Assets/Other icons/cartIcon.png")} alt="" className='w-[32px] h-[32px]' />
        <img src={require("../../Assets/Other icons/userIcon.png")} alt="" className='w-[32px] h-[32px]' />
      </section>

    </header >
  )
}

export default Header
