import "./collapse.scss"
import {useState} from "react";
function Collapse(){

    const [open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return(

    <div className="dropdown-body">
        <button className="dropdown-long" onClick={handleOpen}>Title</button>
        {
        open ?
            <div className="is-open">Les annonces postées sur Kasa garantissent une fiabilité totale.
                Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</div>
        :
            <div className="is-close"></div> }
    </div>

        /*
        <select className="dropdown-long">
            <option>La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</option>
        </select>

        <select className="dropdown-long">
            <span>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
                N'hésitez pas à nous contacter si vous avez la moindre question.</span>
        </select>

        <select className="dropdown-long">
            <span>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                chaque logement correspond aux critères de sécurité établis par nos services.
                En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
                Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</span>
        </select> */

    )
}
export default Collapse