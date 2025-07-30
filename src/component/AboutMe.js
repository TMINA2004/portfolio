import React from 'react'

const AboutMe = () => {
  return (
    <div className='md:flex grid grid-col-1 bg-gray-100 rounded-tr-full mb-10  gap-20 md:pl-16 shadow shadow-black '>
       
        <div className='md:w-1/2 w-full'> 
            <div className='flex justify-center items-center text-dark-blue text-3xl font-bold pt-5'>About Me</div>
           <div className='flex justify-center items-center text-dark-blue p-5' >
            <div>

            
               Hello! My name is <strong>Amina Touati</strong>, and I'm a passionate student based in <strong>Béjaïa, Algeria</strong>.
             I’m deeply interested in <strong>technology</strong>, especially in web development, artificial intelligence.
               <br/>
               I’m deeply interested in web development and enjoy creating responsive, user-friendly websites.<br/> I work with technologies like <strong>React.js</strong> for building dynamic interfaces, <strong>JavaScript (ES6+)</strong> for interactivity,
              <strong> HTML and CSS </strong> for structure and styling, and  <strong>Tailwind CSS</strong> 
              
              for utility-first design.<br/> I also use  <strong>Git and GitHub</strong> 
               for version control and have basic experience with  <strong>Python </strong>
                for scripting and backend fundamentals and <strong>nodejs</strong>. 
                <br/>
              I’m always eager to learn, grow, and take on new challenges in the tech world.

           </div>
           </div>


        </div>
         <div className='flex '>
            <div>

       
    <h2 className="text-dark-blue md:text-2xl font-semibold mb-4 pt-6 text-lg ">💻 My Skills</h2>
  <ul className="grid md:grid-cols-2 grid-cols-1 gap-4 text-center text-dark-blue md:text-lg pt-10 text-md">
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