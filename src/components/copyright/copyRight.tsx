import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
const CopyRight = () => {
    return (
        <div className='flex justify-between items-center py-2 mx-48'>
            <div className='w-fit px-1  flex gap-1 border border-fuchsia-700 p-1   font justify-center items-center cursor-pointer  rounded-md hover:text-white hover:bg-fuchsia-950'>
                <span className='font-medium w-10 rounded-md text-white bg-fuchsia-950 text-center '>Woo</span>
                <span className='font-medium text-xs text-center'>commerce</span>
            </div>
            <div className='flex text-center gap-2 text-sm text-gray-500'>

                <p className=' cursor-pointer'>Stay Connected</p>
                <FacebookIcon className=' cursor-pointer hover:text-blue-700' />
                <LinkedInIcon className='cursor-pointer hover:text-blue-600' />
                <PinterestIcon className='cursor-pointer hover:text-red-600' />
                <TwitterIcon className='cursor-pointer hover:text-blue-600' />

                <p className=''>© 2021 Woo Commerce. All rights reserved.</p>

            </div>
        </div>
    )
}

export default CopyRight
