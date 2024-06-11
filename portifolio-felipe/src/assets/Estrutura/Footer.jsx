import './Footer.css'
import { FaFigma, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";

function Footer(){
    return(
        <div className="footer">
            <div className="ctt">
              <div id="num">
                <h2>Meu Contato: <br />
                 34 991384913</h2>
              </div>
            <div id="email">
                <h2>Email: <br /> lipao01017@gmail.com</h2>
            </div>
            <ul>
                <li><a href=""><FaFigma size={40}/></a></li>
                <li><a href=""><FaInstagram size={40}/></a></li>
                <li><a href=""><FaLinkedin size={40}/></a></li>
            </ul>
            </div>
        </div>
    )
}
export default Footer