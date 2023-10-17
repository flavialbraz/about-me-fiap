import { useState } from 'react';

import javascript from '../assets/images/javascript.svg'
import node from '../assets/images/node.svg'
import me from '../assets/images/me3.png'
import instagram from '../assets/images/instagram.svg'
import behance from '../assets/images/behance.svg'
import github from '../assets/images/github.svg'
import email from '../assets/images/email.svg'
import loadingSvg from '../assets/images/loading.svg'

const About = () => {
  const [showLearningTecs, setShowLearningTecs] = useState(false);

  const toggleLearningTecs = () => {
    setShowLearningTecs(!showLearningTecs);
  }

  const [cep, setCep] = useState('28920271');
  const [address, setAddress] = useState('');
  const [showAddress, setShowAddress] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAddress = async () => {
    try {
      setLoading(true);
      setError(null); // Reset any previous errors
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAddress(`${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`);
      setShowAddress(true);
    } catch (error) {
      setError('Error fetching address. Please try again.'); // Set an error message
    } finally {
      setLoading(false);
    }
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

      <section className="who get-cep">
        <div className="more-about-me flex"> 
            <div className="cep-container">
              <input
                type="text"
                placeholder="Digite o seu CPF"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              <button onClick={fetchAddress}>Buscar</button>
            </div>
            <div className="loading">{loading && <p> <img src={loadingSvg} alt="Carregando" /></p>}</div>
            <div className="error-msg">{error && <p>Ops, algo de errado aconteceu. Tente novamente. </p>}</div>
            {!error && showAddress && (
              <div className="full-address">
                <h3>Endereço: </h3>
                <p>{address}</p>
              </div>
            )}
          </div>
        </section>
    </>
  )
}

export default About;