import "./card.css";
import {Link} from "react-router-dom";

/**
 *Composant Card
 * Renvoyant les infos d'une house sous forme de card
 * @return {JSX.Element}
 * @constructor
 */
function Card ({house, index}){

    return(
        <Link key={index} to={`/fiche-logement/${house.id}`} className="card">
            <div className="card-image">
            <img src={house.cover} alt="Présentation de l'appartement" />
            </div>
            <span>{house.title}</span>
        </Link>
    )
}

export default Card

