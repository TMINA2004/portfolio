
import './App.css';
import Header from './header/Header';
import About from './component/About';
import Spezialiste from './component/Spezialiste';
import Mywork from './component/Mywork';
import AboutMe from './component/AboutMe';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import ContactMe from './component/ContactMe';



function App() {

useEffect(() => {
  AOS.init({ duration: 800 });
}, []);

  return (
    <div className="App bg-gray-100">
 <Header/>
 <About/>
<AboutMe/> 

 <Mywork/>
 <ContactMe/>

 
    </div>
  );
}

export default App;
