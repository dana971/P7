import "./collapse.scss"
import {useState} from "react";
import arrow from "../../assets/images/arrow.svg"



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
                <img src={arrow}  className="arrow-open" />
            :
                <img src={arrow}  className="arrow" />}
        </div>

        {open ?
            <div className="is-open">
            {description} 
            {liste && liste.map((item) => {
            return (
                <p>
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