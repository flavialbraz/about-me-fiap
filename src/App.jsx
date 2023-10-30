import './App.css'
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import MoreAbout from './components/MoreAbout';
import Hobbies from './components/Hobbies';

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="container">
        <Routes>
        <Route index element={<Home />} />
        <Route path="sobre" element={<About />} />/
        <Route path="projetos" element={<Projects />} />
        <Route path="mais-sobre" element={<MoreAbout />} />
        <Route path="hobbies" element={<Hobbies />} />
      </Routes>
      </div>
  )
}

export default App
