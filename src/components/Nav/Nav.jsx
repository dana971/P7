import {Link, NavLink} from "react-router-dom";
import logoKasa from "../../assets/images/logo.svg"
import  "./Nav.css"

/**
 * Barre de navigation renvoyer vers les pages Accueil et A-propos
 * @return {JSX.Element}
 * @constructor
 */
function Nav (){

    let activeClassName = "nav-buttons-active";

    return(
        <nav>
            <Link to="/" >
               <img src={logoKasa} alt="logo de l'enseigne kasa"/>
            </Link>
            <div className="nav-buttons">
                <NavLink
                    to="/"
                    className={({isActive})=>
                        isActive ? activeClassName : ""
                    }
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/about"
                    className={({isActive})=>
                        isActive ? activeClassName : ""
                    }
                >
                    A propos
                </NavLink>
            </div>
        </nav>
    )
}

export default Nav