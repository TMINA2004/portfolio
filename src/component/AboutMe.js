import React from 'react'

const AboutMe = () => {
  const profile = {
  first_name: "Amina",
  last_name: "Touati",
  status: "Computer Science Student",
  location: "Béjaïa, Algeria",
  description: "I'm deeply interested in technology, especially in web development and artificial intelligence.",
  skills: [
    "Web Development",
    "React.js",
    "JavaScript (ES6+)",
    "HTML & CSS",
    "Tailwind CSS",
    "Git & GitHub",
    "Python (Basics)",
    "Node.js (Basics)",
    "AI & Machine Learning (Beginner)",
    "Always eager to learn!"
  ]
};
  return (
    <div data-aos="fade-right" className=' md:flex grid grid-col-1 bg-white  mb-10  md:gap-13 md:pl-16 shadow shadow-black gap-5 m-20 '>
       
        <div className='md:w-1/2 w-full b'> 
       
           <div className='flex justify-center items-center text-dark-blue md:p-5 md:px-3 sm:pl-20 pl-2  ' >
            <div>
               <h1 className="text-2xl font-bold ">{profile.first_name} {profile.last_name}</h1>
      <p className="text-gray-600 italic md:text-2xl sm:text-md text-sm">{profile.status} – {profile.location}</p>
      <p className="mt-4 md:text-2xl sm:text-sm md:full w-3/4 text-xs">{profile.description}</p>
      
     

                  

           </div>
           </div>


        </div>
         <div className='flex md:justify-center md:items-center '>
            <div>

       
  
  <ul className="grid md:grid-cols-2 sm:grid-cols-4 grid-col-3 gap-4 text-center text-dark-blue md:text-2xl md:pt-10 text-lg w-full pb-16 ">
    <li>⚛️ React.js</li>
    
    <li  data-aos="fade-right" >🎨 Tailwind CSS</li>
    <li data-aos="fade-right" >🧠 AI Basics</li>
    <li data-aos="fade-right" >📝 JavaScript</li>
    <li data-aos="fade-right" >🐍 Python</li>
    <li data-aos="fade-right" >🌐 HTML/CSS</li>
    <li data-aos="fade-right" >📦 GitHub</li>
    <li data-aos="fade-right" >🟩 Node.js</li>
    <li data-aos="fade-right" >loading ...</li>
  </ul>

                </div>   
        </div>









    </div>
  )
}

export default AboutMe