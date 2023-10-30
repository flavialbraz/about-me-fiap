
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Tecs from "./Tecs";
const Home = () => {
return (
	<>
	<header>
        <Header />
		<div className="container top flex">
			<div className="header-welcome" id="home">
				<h6>Prazer! </h6>
				<h1>Olá, eu sou Flávia Braz</h1>
				<p> Desenvolvedora & UI Designer. </p>
				<NavLink to="/sobre"> <button className="btn topo"> Conhecer mais </button></NavLink>
			</div>

			<div className="img-welcome"></div>
		</div>

		<Tecs />
	</header>
	</>
);
}

export default Home;