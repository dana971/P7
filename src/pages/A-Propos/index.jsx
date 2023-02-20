import "./A-propos.scss"
import laVallee from "../../assets/images/img-vallee.png"
import Dropdown from "../../components/Collapse"

function About (){

    return(
        <div>
            <img src={laVallee} className="banner-about" alt="Illustration d'une vallée enneigée"/>
            <div className="dropdown-container">
                <Dropdown/>
            </div>



        </div>
    )
}

export default About