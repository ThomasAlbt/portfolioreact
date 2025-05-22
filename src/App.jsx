import {BrowserRouter, Routes, Route} from 'react-router';

//pages
import Home from './pages/Home';
import Project from './pages/Project';
import About from './pages/About';
import Formations from './pages/Formations';
import Contact from './layout/Contact';

//layout
import Header from './layout/Header';

//components
import ScrollBehavior from './components/ScrollBehavior';
import VantaBackground from './components/Background';

//css
import './assets/style/Reset.css';
import './assets/style/App.css';

function App() {
  return (
    <>
        <BrowserRouter>
          <VantaBackground/>
          <ScrollBehavior>
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/Acceuil" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Project" element={<Project/>}/>
              <Route path="/Formations" element={<Formations/>}/>
              <Route path="/Contact" element={<Contact/>}/>
            </Routes>
          </ScrollBehavior>
        </BrowserRouter>
    </>
  )
}

export default App
