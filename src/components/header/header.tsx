import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
const Header = () => {
  const[darkMode , setDarkMode] = useState<boolean>(false)
  return (
    <header className='h-20 py-2 flex justify-around items-center '>
      <div className='w-fit px-2  flex flex-col  font justify-center items-center  rounded-md hover:text-white hover:bg-fuchsia-950'>
        <span className='font-bold w-10 rounded-md text-white bg-fuchsia-950 text-center'>Woo</span>
        <span className='font-medium text-sm text-center'>commerce</span>
      </div>
      <div className='w-[40%] h-1/2 flex items-center justify-center'>
        <form className='flex h-full'>        
          <input className='rounded-l-xl border border-purple-800   ' type="text" placeholder='...searce' name="" id=""  />
          <div className='rounded-r-xl border border-purple-800   bg-white '>
          <SearchOutlinedIcon color="secondary" />
          </div>
        </form>

      </div>
      <div className='flex justify-around w-[10%]'>
        <button onClick={()=>setDarkMode(!darkMode)} className='hover:bg-gray-300 rounded-full' type='button'>{darkMode?<DarkModeIcon color="secondary"/>:<LightModeIcon color='secondary'/>}</button>
        <AccountCircleIcon color="secondary"/>
        <div>
        <ShoppingCartIcon color="secondary"/>
        <span className='relative right-3 text-white bottom-1.5'>0</span>
        </div>
      </div>

    </header>
  )
}

export default Header
