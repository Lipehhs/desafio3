import { FaGithub, FaLinkedin } from "react-icons/fa";

import './Nav.css'
function Nav() {
    return (

        <div className="navs">
            <div>
                <a href='#pro'><h1>Projetos</h1></a>
                <a href=""><h1>Tecnologias</h1></a>
                <a href="#sobre"><h1>Sobre Mim</h1></a>
            </div>


            <div className="icons">
                <ul>
                    <li> <a href="https://github.com/Lipehhs"><FaGithub size={30} /></a>  </li>
                    <li> <a href="https://www.linkedin.com/in/felipe-assis-434353282/" ><FaLinkedin size={30} /></a> </li>
                </ul>
            </div>

        </div>

    )
}

export default Nav