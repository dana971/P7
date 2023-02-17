import {Link} from "react-router-dom";
import LaFalaise  from "../../assets/images/img-falaise.png";
import logoKasa from "../../assets/images/logo.svg"
import styleHeader from "./header.scss"
function Header (){

    return(
        <nav>
            <img src={logoKasa} alt="logo de l'enseigne kasa"/>
            <Link to="/" style={styleHeader}> Accueil</Link>
            <Link to="/about"> A propos</Link>
            <img src={LaFalaise} alt="La Falaise"/>
            <span>Chez vous et partout ailleurs</span>
        </nav>
    )
}

export default Header