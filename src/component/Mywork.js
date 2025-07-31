import React from 'react'
import img from './todos.jpeg'

const Mywork = () => {
  return (
  <div>
    <div className='flex justify-center items-center'>
      <div className='text-3xl text-dark-blue' data-aos="fade-down">My works</div>
    </div>
    <div className='sm:mx-20 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 mx-10 shadow-lg shadow-zinc-600'>
      <div className='hover:'>
             <a href='https://github.com/hadjerbk/todolist.git'    data-aos="zoom-in" target="_blank" rel="noopener noreferrer" >
               <img className=''  src={img} />
             </a>
      </div>
      <div> 
         <a href='https://github.com/hadjerbk/todolist.git' data-aos="zoom-in"  target="_blank" rel="noopener noreferrer" >
           <img className=''  src={img} />
          </a>

      </div>
      
      <div>
            <a href='https://github.com/hadjerbk/todolist.git' data-aos="zoom-in"  target="_blank" rel="noopener noreferrer" >
               <img className=''  src={img} />
            </a>
      </div>
      <div>
            <a href='https://github.com/hadjerbk/todolist.git' data-aos="zoom-in"  target="_blank" rel="noopener noreferrer" >
               <img className=''  src={img} />
            </a>
      </div>
     

    </div>
  </div>
  )
}

export default Mywork