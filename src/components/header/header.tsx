import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Header = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <header className='z-10 relative flex w-[full] h-[107px] bg-white justify-between items-center rounded-br-[60px]  drop-shadow-lg' >
      <section className='ml-[64px] '>
        <h1 className=' font-bold text-red text-[28px] leading-[42px] '> E-SHOP</h1>
      </section>

      <section className='ml-[267px] w-[273px] h-[40px] flex items-center  relative '>
        <input type="search" placeholder='Search Products' className='rounded-[50px] text-center drop-shadow-md bg-[#EFEFEF] w-full h-full ' />
        <img src={require('../../Assets/Other icons/search.png')} alt="sdf" className='w-[22.63px]  h-[21.34px] absolute top-[8.9px] left-[22px]' />

      </section>

      <section className='w-[321px] h-[20.2px] ml-[40px] flex gap-[35px] text-[13px] leading-[19.5px] font-medium '>
        <span>HOME</span>
        <span>PRODUCTS</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
      </section>

      <section className='flex gap-[39px] ml-[40px] mr-[57px]'>
        <span><img src={require("../../Assets/Other icons/cartIcon.png")} alt="" className='w-[32px] h-[32px]' /></span>
        <span><img src={require("../../Assets/Other icons/userIcon.png")} alt="" className='w-[32px] h-[32px]' /></span>
      </section>

    </header >
  )
}

export default Header
