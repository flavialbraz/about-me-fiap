import './App.css'
import Header from './components/Header';
import Tecs from './components/Tecs';
import About from './components/About';
import Projects from './components/Projects';
import MoreAbout from './components/MoreAbout';
import Footer from './components/Footer';


function App() {

  return (
    <div className="container">
        <Header />
        <Tecs />
        <About />
        <Projects />
        <MoreAbout />

        <Footer />
      </div>
  )
}

export default App
