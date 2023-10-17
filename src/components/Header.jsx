const Header = () => {
return (
	<>
	<header>
		<div className="container top flex">
			<nav>
				<a href="#home"> Início </a>
				<a href="#quem">Quem sou eu</a>
				<a href="#projetos">Projetos</a>
				<a href="#trabalhos"> O que faço </a>
			</nav>

			<div className="header-welcome" id="home">
				<h6>Prezer! </h6>
				<h1>Olá, eu sou Flávia Braz</h1>
				<p> Desenvolvedora & UI Designer. </p>
				<a href="#quem"> <button className="btn topo"> Conhecer mais </button></a>
			</div>

			<div className="img-welcome"></div>
		</div>
	</header>
	</>
);
}

export default Header;