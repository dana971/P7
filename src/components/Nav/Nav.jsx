import {Link} from "react-router-dom";
import logoKasa from "../../assets/images/logo.svg"
import  "./Nav.scss"
function Nav (){

    return(
        <nav>
            <img src={logoKasa} alt="logo de l'enseigne kasa"/>
            <div className="nav-buttons">
                <Link to="/" > Accueil</Link>
                <Link to="/about"> A propos</Link>
            </div>
        </nav>
    )
}

export default Nav