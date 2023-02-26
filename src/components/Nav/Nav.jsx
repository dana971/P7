import {Link} from "react-router-dom";
import logoKasa from "../../assets/images/logo.svg"
import  "./Nav.css"

/**
 * Barre de navigation renvoyer vers les pages Accueil et A-propos
 * @return {JSX.Element}
 * @constructor
 */
function Nav (){

    return(
        <nav>
            <Link to="/" >
               <img src={logoKasa} alt="logo de l'enseigne kasa"/>
            </Link>
            <div className="nav-buttons">
                <Link to="/" > Accueil</Link>
                <Link to="/about"> A propos</Link>
            </div>
        </nav>
    )
}

export default Nav