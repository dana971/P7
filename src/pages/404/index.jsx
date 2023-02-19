import errorPicture from "../../assets/images/404.svg"
import "./404.scss"


function Error404 (){

    return(
        <div className="error-container">
            <img src={errorPicture} className="error-img" alt="Message d'erreur 404"/>
            <span className="error-msg">Oups ! La page que vous demandez n'existe pas !</span>
            <div className="switch-link">Retourner sur la page d'accueil</div>
        </div>
    )
}

export default Error404