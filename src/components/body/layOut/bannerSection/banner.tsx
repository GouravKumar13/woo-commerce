import React from 'react'
import { BannerImage } from '../../../../config'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Banner = () => {
  const [imageCount, setImageCount] = React.useState(0)
  const image = BannerImage()[imageCount].Image

  //   setTimeout(() => {
  //     if (imageCount < BannerImage().length - 1) {
  //       setImageCount(imageCount + 1)
  //     } else {
  //       setImageCount(0)
  //     }
  // }, 5000)

  const handeleBackClick = () => {
    if (imageCount === 0) {
      setImageCount(BannerImage().length - 1)
    }
    else {
      setImageCount(imageCount - 1)
    }
  }

  const handeleForwardClick = () => {
    if (imageCount === BannerImage().length - 1) {
      setImageCount(0)
    } else {
      setImageCount(imageCount + 1)
    }
  }


  return (



    <div className='w-fit h-96 overflow-hidden'>
      <img src={image} alt="banner" className='w-full h-96 relative' />
      <span onClick={handeleBackClick}>
        <ArrowBackIosIcon className='absolute z-1 top-[40%] ml-3 text-white cursor-pointer' />
      </span>
      <span onClick={handeleForwardClick}>
        <ArrowForwardIosIcon className='absolute z-1 top-[38%] left-[94%] text-white cursor-pointer' />
      </span>
      <span className='absolute  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer p-3 text-white font-semibold bg-fuchsia-900 uppercase'>
        Shope now
      </span>

    </div>

  )
}

export default Banner
