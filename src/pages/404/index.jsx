import "../../assets/images/404.svg"
import {NavLink} from "react-router-dom";

function Error404 (){

    return(
        <div>
            <img src="./../assets/images/404.svg" alt="Message d'erreur 404"/>
            <span>Oups ! La page que vous demandez n'existe pas !</span>
            <div>Retourner sur la page d'accueil</div>
        </div>
    )
}

export default Error404