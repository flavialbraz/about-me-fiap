import { useState } from 'react';

import javascript from '../assets/images/javascript.svg'
import node from '../assets/images/node.svg'
import me from '../assets/images/me3.png'
import instagram from '../assets/images/instagram.svg'
import behance from '../assets/images/behance.svg'
import github from '../assets/images/github.svg'
import email from '../assets/images/email.svg'


const About = () => {
const [showLearningTecs, setShowLearningTecs] = useState(false);

const toggleLearningTecs = () => {
    setShowLearningTecs(!showLearningTecs);
}
  return (
    <>
      <section className="who flex" id="quem">
          <div className="more-about-me">
              <h2>Quem eu sou </h2>
              <p> Olá! Que legal te ver por aqui! Como você vai? Eu me chamo Flávia. Sou uma carioca que ama códigos, ui design, séries e que acredita no poder da educação para mudar o mundo. Atualmente formada no programa “Desenvolve - Boticário” e cursando Sistemas para internet na FIAP. </p>
                  <div className="social-m"> 
                      <a href="https://instagram.com/alessadev"> <img src={instagram} width="45px" height="45px" alt="Instagram"/></a>
                      <a href="https://www.behance.net/flavialbraz"> <img src={behance} width="45px" height="45px" alt="Behance"/></a>
                      <a href="https://github.com/flavialbraz"> <img src={github} width="45px" height="45px" alt="Github"/></a>
                      <a href="mailto:flavialbrazx@gmail.com"> <img src={email} width="45px" height="45px" alt="E-mail"/></a>
                  </div>
                  
              <button className="btn tecs" id="tecs" onClick={toggleLearningTecs}> Tecnologias em desenvolvimento </button>
              {showLearningTecs && (
                <div className={`learning-tecs ${showLearningTecs ? 'fade-in active' : 'fade-in'}`}>
                  <p> Tecnologias que estou estudando </p>
                  <img src={javascript} width="50px" height="50px" alt="Javascript"/> 
                  <img src={node} width="50px" height="50px" alt="Node"/>
                </div>
              )}
          </div>

        <div className="img-who">
            <img src={me} alt="Foto" />
        </div>
      </section>
    </>
  )
}

export default About;