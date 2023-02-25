import "./collapse.scss"
import {useState} from "react";
import arrow from "../../assets/images/arrow.svg"


/**
 * Composant dynamique dropdown
 * @param title
 * @param description
 * @param liste
 * @return {JSX.Element}
 * @constructor
 */
function Collapse({title ,description, liste}){

    const [open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };


    return(

    <div className="dropdown-body">
        <div className="dropdown-head" onClick={handleOpen} >
            <button className="dropdown-btn" >{title}</button>
            {open ?
                <img src={arrow}  className="arrow-open" alt="chevron vers le bas"/>
            :
                <img src={arrow}  className="arrow" alt="chevron vers le haut"/>}
        </div>

        {open ?
            <div className="is-open">
                {description}
                {/* On évalue s'il y a une liste  */}
                {liste && liste.map((item, index) => {
                return (
                    <p className="equipement" key={index}>
                        {item}
                    </p>
                )}
            )}
            
            </div>
        :
            <div className="is-close"></div> }
    </div>
    )
}
export default Collapse