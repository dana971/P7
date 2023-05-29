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
            <Link to={`${process.env.PUBLIC_URL}/`} >
               <img src={logoKasa} alt="logo de l'enseigne kasa"/>
            </Link>
            <div className="nav-buttons">
                <Link to={`${process.env.PUBLIC_URL}/`}> Accueil</Link>
                <Link to={`${process.env.PUBLIC_URL}/about`}> A propos</Link>
            </div>
        </nav>
    )
}

export default Nav