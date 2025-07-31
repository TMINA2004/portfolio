import React from 'react'

const AboutMe = () => {
  const profile = {
  first_name: "Amina",
  last_name: "Touati",
  status: "Computer Science Student",
  location: "Béjaïa, Algeria",
  description: "I'm deeply interested in technology, especially in web development and artificial intelligence. I enjoy creating responsive, user-friendly websites.",
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
    <div data-aos="fade-right" className=' md:flex grid grid-col-1 bg-gray-100 md:rounded-tr-full md:rounded-br-full mb-10  md:gap-13 md:pl-16 shadow shadow-black gap-5 rounded-br-full rounded-tr-full '>
       
        <div className='md:w-1/2 w-full b'> 
       
           <div className='flex justify-center items-center text-dark-blue md:p-5 md:px-3 sm:pl-20  ' >
            <div>
               <h1 className="text-2xl font-bold">{profile.first_name} {profile.last_name}</h1>
      <p className="text-gray-600 italic">{profile.status} – {profile.location}</p>
      <p className="mt-4 md:text-2xl text-sm md:full w-3/4">{profile.description}</p>
      <h2 className="mt-6 font-semibold">Skills:</h2>
      <ul className="list-disc ml-5 mt-2">
        {profile.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

                  

           </div>
           </div>


        </div>
         <div className='flex md:justify-center md:items-center '>
            <div>

       
  
  <ul className="grid md:grid-cols-2 grid-cols-4 gap-4 text-center text-dark-blue md:text-2xl md:pt-10 text-lg w-full pb-16 ">
    <li>⚛️ React.js</li>
    
    <li>🎨 Tailwind CSS</li>
    <li>🧠 AI Basics</li>
    <li>📝 JavaScript</li>
    <li>🐍 Python</li>
    <li>🌐 HTML/CSS</li>
    <li>📦 GitHub</li>
    <li>🟩 Node.js</li>
  </ul>

                </div>   
        </div>









    </div>
  )
}

export default AboutMe