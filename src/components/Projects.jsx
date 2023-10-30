import { useEffect, useState } from 'react';
import Header from "./Header";
import loadingSvg from '../assets/images/loading.svg'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetch('https://api.github.com/users/flavialbraz/repos?sort=created&direction=desc')
      .then(response => response.json())
      .then(data => {
        const promises = data.map(repo => {
          return fetch(`https://raw.githubusercontent.com/flavialbraz/${repo.name}/main/README.md`)
            .then(response => response.text())
            .then(text => {
              const regex = /!\[.*?\]\((.*?)\)/;
              const match = regex.exec(text);
              return {
                ...repo,
                readmeImage: match ? match[1] : null
              };
            });
        });
        return Promise.all(promises);
      })
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <section className="projects flex">
        <div className="sec-title">
          <h2 id="projetos"> Projetos - Experiências </h2>
        </div>

        <ul className="flex">
        <div className="loading">{loading && <p> <img src={loadingSvg} alt="Carregando" /></p>}</div>
          {projects.slice(0, 9).map((project, index) => (
            <li className="card" key={index}>
              <div className="image-card">
              {project.readmeImage && <img src={project.readmeImage} alt={`Imagem do projeto ${index}`} />}
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="btn viewmore"> Acessar no GitHub </a>
              </div>
              <div className="card-body">
                <h5>{project.language}</h5>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Projects;
