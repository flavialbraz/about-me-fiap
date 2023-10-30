
import Header from './Header';
const Hobbies = () => {
return (
	<>
    <Header />
	
    <section className="jobs flex">
            <div className="sec-title">
                <h2 id="trabalhos"> Hobbies </h2>
            </div>

            <a className="card-jobs hobbies">
                <span> Escutar.... </span>
                <h3> Músicas & Podcast </h3>
                <p>  Minhas coisas favoritas além de dormir e codar são: ouvir musica e podcasts de true crime  </p>
            </a>
            
            <a className="card-jobs hobbies">
                <span> Leitora </span>
                <h3> Lado leitora </h3>
                <p>Além de ouvir sobre true crime, também gosto de ler sobre o assunto. Meu gênero de livro favorito é definitivamente o terror 🫣  </p>
            </a>
            
                <a className="card-jobs hobbies">
                <span> Design </span>
                <h3> A minha primeira paixão </h3>
                <p>Design gráfico foi a minha primeira paixão da vida. Hoje eu estou mais para UI hihi </p>
            </a>

            <a className="card-jobs hobbies">
                <span> Codar </span>
                <h3> #01 </h3>
                <p> Por ultimo o mais importante, o que mais faço no dia e o que mais me estressa e me deixar felizzz: CODAR </p>
            </a>
        </section>
	</>
);
}

export default Hobbies;