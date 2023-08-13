import React from 'react'





const Footer = () => {
  return (
    <footer className='bg-[#2D2B2B] font-[Poppins] w-full h-[394px] absolute top-[2603px] border-b-2 text-white   flex  justify-around  '>

      <section className=' w-[325px] max-h-[108px] mt-[98px] ml-[73px]  mb-[188px]'>
        <h1 className='text-red font-bold text-[30px] leading-[45px] '>
          E-Shope
        </h1>
        <p className='text-[15px] leading-[22.5px] font-normal'>Specializes in providing high-quality, stylish <br />
          products for your wardrobe</p>
      </section>


      <section className='flex mt-[41px]'>


        <div className='flex flex-col gap-7 max-w-[325px] max-h-[204px]'>
          <h1 className='text-xl font-bold w-[100px] border-b-4  border-red '>CONTACT</h1>
          <div className='flex flex-col gap-6 font-normal text-[15px] leading-[22.5px]' >
            <div className='flex gap-[7px]'> <img src={require('../../Assets/Other icons/icons8-location-50 1.png')} alt="LO" className='w-[22px] h-[22px]' />
              <p>No. 164, Changyisu Str, Paung Township,<br />
                Mon State, Myanmar </p></div>
            <div className='flex gap-[7px]'><img src={require('../../Assets/Other icons/icons8-phone-64 1.png')} alt="LO" className='w-[22px] h-[22px]' />09-450756980, 09-697417662</div>
            <div className='flex gap-[7px]'><img src={require('../../Assets/Other icons/icons8-email-80 1.png')} alt="LO" className='w-[22px] h-[22px]' />gouravkumarat@gmail.com </div>
          </div>
        </div>


        <div className='max-w-[114px] flex flex-col gap-[18px] max-h-[178px] ml-[99px]'>
          <h1 className='text-xl font-bold  border-b-4  border-red '>QUICK LINK</h1>
          <ol className='list-disc text-[15px] leading-[22.5px] font-normal'>
            <li >Home</li>
            <li >Products</li>
            <li >About</li>
            <li >Contact</li>
            <li >Add to Cart</li>

          </ol>
        </div>

        <div className='max-w-[181px] max-h-[94px] ml-[85px] flex flex-col items-center gap-6'>
          <h1 className='text-xl font-bold  border-b-4  border-red '>FOLLOW US</h1>
          <div className='flex gap-[7px] '>
            <img src={require('../../Assets/Social icon/facebook.png')} alt='f' className='w-[40px] h-[40px] cursor-pointer' />
            <img src={require('../../Assets/Social icon/twitter.png')} alt='t' className='w-[40px] h-[40px] cursor-pointer' />
            <img src={require('../../Assets/Social icon/instagram.png')} alt='ig' className='w-[40px] h-[40px] cursor-pointer' />
            <img src={require('../../Assets/Social icon/youTube.png')} alt='yt' className='w-[40px] h-[40px] cursor-pointer' />
          </div>
        </div>
      </section>

    </footer >
  )
}

export default Footer
