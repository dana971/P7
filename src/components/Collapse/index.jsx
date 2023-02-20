import "./collapse.scss"
import {useState} from "react";
import arrow from "../../assets/images/arrow.svg"



function Collapse({fiabilite}){

    const [open, setOpen ] = useState(false);
    const handleOpen = () => {
        setOpen(!open);
    };

    return(

    <div className="dropdown-body">
        <div className="dropdown-head" onClick={handleOpen}>
            <button className="dropdown-btn" >Title</button>
            <img src={arrow}/>
        </div>
        {
        open ?
            <div className="is-open">{fiabilite}</div>
        :
            <div className="is-close"></div> }
    </div>
    )
}
export default Collapse