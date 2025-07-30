import React from 'react'
import image from './Image-2.png'

const About = () => {
  return (
    <div className='flex md:gap-20 mt-10  m-10 gap-5     '>
        <div className='flex justify-end items-center  text-center  w-[50%]  '>
         <div className='  text-center items-end justify-end '>
           <div className='text-dark-blue lg:text-5xl text-center md:text-3xl sm:text-2xl text-lg'>
                HEY! I’m Amina,<br/>  Web   
           </div>
          <div className=' text-dark-blue lg:text-base flex m-2  text-center  items-center justify-center md:text-sm text-xs text-[10px] '>
                 <div className='lg:w-1/2 md:w-3/4 sm:w-3/4 w-full  '>
                     Agency-quality Webflow websites with the personal touch of a freelancer
                 </div>
           
           </div>
         </div>
        </div>


        <div className=''>
            <div className='lg:w-96 lg:h-96 flex bg-gray-200 rounded-full relative md:w-72 md:h-72 sm:h-60 sm:w-60 h-40  w-40 ' >
                <div>
                 <div className='sm:h-10 sm:w-10 rounded-md rotate-45 absolute lg:left-10 md:left-7 top-5  bg-purple-400 h-5 w-5'></div>
                 <img className='h-full' src={image}/>
                </div>
                <div className='bg-red-300  relative'>
                <div className='md:h-7 w-7 rounded-md rotate-45   bg-blue-300 absolute bottom-2 md:right-2 right-0.5    '></div>
                 <div className='lg:h-10 lg:w-10 md:h-7 md:w-7 rounded-md rotate-45   bg-gray-500 absolute lg:top-40 md:top-24 top-0 left-0 '></div>
                </div>
            </div>


        </div>


    </div>
  )
}

export default About