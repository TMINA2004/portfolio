import React, { useState,useEffect } from 'react'
import img from './todos.jpeg'
import img2 from '../assets/Capture d’écran_1-8-2025_153847_.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'





const Mywork = () => {
  const [picture,setpicture]=useState([
    {img:img,link:'https://github.com/hadjerbk/todolist.git' },
  {img:img,link:'https://github.com/hadjerbk/todolist.git' },
      {img:img2,link:'https://github.com/hadjerbk/todolist.git' },
      {img:img2,link:'https://github.com/hadjerbk/todolist.git' },
      {img:img,link:'https://github.com/hadjerbk/todolist.git' },
         {img:img2,link:'https://github.com/hadjerbk/todolist.git' },
      {img:img,link:'https://github.com/hadjerbk/todolist.git' },
         {img:img2,link:'https://github.com/hadjerbk/todolist.git' },
      {img:img,link:'https://github.com/hadjerbk/todolist.git' },
    ])
    const [count ,setcount]=useState(0)
     useEffect(() => {
    AOS.init({ duration: 700 }) // init AOS
  }, [])

  // re-init AOS à chaque changement de `count`
  useEffect(() => {
    AOS.refresh()
  }, [count])



  return (
  <div className='bg-white mx-20 shadow-lg shadow-gray-300'>
    <div className='flex justify-center items-center '>
      <div cla
      ssName='text-3xl text-dark-blue' data-aos="fade-down">My Projects</div>
    </div>
    <div className='  flex pb-5 '>






       <div onClick={()=>{setcount(count-3)}}  className='flex justify-center items-center'>

            <svg
                 xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600 inline-block transform transition-transform duration-200 hover:-translate-x-1"
                     fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                             >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
           </div>
      <div  key={count} className='mt-5 grid gap-5 sm:grid-cols-3 w-full  '>

  
     {
        picture.slice(count,count+3).map((item,index)=>(
           <a href={item.link}   target="_blank" rel="noopener noreferrer" >
               <img data-aos="zoom-in" className='h-[200px] w-full  shadow-2xl shadow-gray-500' src={item.img}/>
            </a>

         
        ))
       }
           </div>
           <div onClick={()=>{setcount(count+3)}} className=' flex justify-center items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500  hover:translate-x-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
             </svg>
           </div>
          
      
     

    </div>
  </div>
  )
}

export default Mywork