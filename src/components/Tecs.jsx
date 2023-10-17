import html from '../assets/images/html.svg'
import javascript from '../assets/images/javascript.svg'
import react from '../assets/images/react.svg'
import typescript from '../assets/images/typescript.svg'
import figma from '../assets/images/figma.svg'
import photoshop from '../assets/images/photoshop.svg'
import wordpress from '../assets/images/wordpress.svg'
import git from '../assets/images/git.svg'
import jquery from '../assets/images/jquery.svg'
import bootstrap from '../assets/images/bootstrap.svg'
import css from '../assets/images/css.svg'

const Tecs = () => {
  return (
    <>
    <div>
       <ul className="tecs flex">
            <li><img src={html} alt="Html" /></li>
            <li><img src={css} alt="CSS" /></li>
            <li><img src={javascript}alt="Javascript" /></li>
            <li><img src={typescript} alt="Typescript" /></li>
            <li><img src={react} alt="React" /></li>
            <li><img src={figma} alt="Figma" /></li>
            <li><img src={photoshop} alt="Photoshop" /></li>
            <li><img src={wordpress} alt="Wordpress" /></li>
            <li><img src={git} alt="Git" /></li>
            <li><img src={jquery} alt="Jquery" /></li>
           <li> <img src={bootstrap} alt="Bootstrap" /></li>
        </ul>
    </div>
    </>
  );
}

export default Tecs;