
import './App.css';
import Header from './header/Header';
import About from './component/About';
import Spezialiste from './component/Spezialiste';
import Mywork from './component/Mywork';
import AboutMe from './component/AboutMe';


function App() {
  return (
    <div className="App">
 <Header/>
 <About/>
<AboutMe/> 

 <Mywork/>

 
    </div>
  );
}

export default App;
