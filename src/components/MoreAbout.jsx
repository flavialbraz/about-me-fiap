import Header from "./Header";

const MoreAbout = () => {
  return (
    <>
        <Header />
        <section className="jobs flex">
            <div className="sec-title">
                <h2 id="trabalhos"> Por aí </h2>
            </div>

            <a href="https://dev.to/flavialbraz/html-quando-trocar-divs-por-tags-3mo2" className="card-jobs">
                <span> Blog </span>
                <h3> HTML: Quando trocar divs por tags? </h3>
                <p>  Momentos que podemos trocar divs por outras tags HTML.  </p>
            </a>
            
            <a href="https://github.com/flavialbraz/links-para-todo-front-end" className="card-jobs">
                <span> Repositório </span>
                <h3> Links para todo front-end </h3>
                <p>Lista com conteúdos para devs front-end. Incluindo links para cursos, outros repositórios, ferramentas e mais.  </p>
            </a>
            
                <a href="https://github.com/flavialbraz/atalhos-vscode" className="card-jobs">
                <span> Repositório </span>
                <h3> Atalhos Visual Studio Code </h3>
                <p>Uma lista de atalhos no VS code para ajudar na produtividade. </p>
            </a>

            <a href="https://dev.to/flavialbraz/git-e-github-para-iniciantes-entendendo-de-forma-simples-2gi3" className="card-jobs">
                <span> Blog </span>
                <h3> O que é git/github </h3>
                <p> Explicando de uma forma simples  </p>
            </a>
        </section>
    </>
  );
}

export default MoreAbout;