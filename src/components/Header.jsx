
import { NavLink } from "react-router-dom";
const Header = () => {
return (
	<>
	<header>
		<div className="container top flex margin-top-2">
			<nav>
				<NavLink to="/"> Início </NavLink>
				<NavLink to="/sobre"> Sobre & Formação </NavLink>
				<NavLink to="/projetos"> Projetos/Experiencias </NavLink>
				<NavLink to="/mais-sobre"> O que faço </NavLink>
				<NavLink to="/hobbies"> Hobbies </NavLink>
			</nav>
			</div>
	</header>
	</>
);
}

export default Header;