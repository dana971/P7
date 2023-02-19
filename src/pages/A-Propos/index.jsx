import "./A-propos.scss"
import laVallee from "../../assets/images/img-vallee.png"
import Dropdown from "../../components/Dropdown"

function About (){

    return(
        <div>
            <img src={laVallee} className="banner-about" alt="Illustration d'une vallée enneigée"/>
            <Dropdown/>


        </div>
    )
}

export default About