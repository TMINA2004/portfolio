import React from 'react'

const Header = () => {
  return (
    /*  lg:bg-green-400 md:bg-red-600 sm:bg-blue-500 bg-yellow-300 */ 
    <div className='text-dark-blue  flex'>
       <div className=' lg:m-4 lg:text-2xl lg:ml-[20%] md:text-xl m-2 md:ml-[15%] sm:ml-[15%] ml-[5%] sm:text-base text-sm '>Amina Protfolio</div> 
       <div className='md:text-base lg:text-xl flex lg:ml-[20%] md:ml-[15%] sm:ml-[10%] sm:text-sm text-xs ml-[7%] '>
        <div className='lg:m-4 m-2 hover:text-purple-600'>Home</div> 
        <div className='lg:m-4 m-2 hover:text-purple-600 '>About me</div> 
        <div className='lg:m-4 m-2 hover:text-purple-600'>Portfolio</div> 
        <div className='lg:m-4 m-2 hover:text-purple-600'>Contact</div> 
         
       </div>
       <button className=' hover:text-purple-600 hover:bg-purple-200 bg-gray-300 text-dark-blue px-4 py-0  lg:mt-5 mt-2.5 rounded-sm lg:text-lg md:text-base sm:text-sm text-xs h-[50%]'>Contact   </button> 
       
      
    </div>
  )
}

export default Header