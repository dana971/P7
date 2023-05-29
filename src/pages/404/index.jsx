import errorPicture from "../../assets/images/404.svg"
import "./404.css"
import {Link} from "react-router-dom";

/**
 * Page d'erreur 404
 * @return {JSX.Element}
 * @constructor
 */
function Error404 (){

    return(
        <div className="error-container">
            <img src={errorPicture} className="error-img" alt="Message d'erreur 404"/>
            <span className="error-msg">Oups ! La page que vous demandez n'existe pas !</span>
            <Link to={`${process.env.PUBLIC_URL}/`} className="switch-link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error404