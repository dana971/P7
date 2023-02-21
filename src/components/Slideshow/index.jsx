import "./Slideshow.scss"
import leftChevron from "../../assets/images/chevron-left.svg"
import rightChevron from "../../assets/images/chevron-right.svg"

function Slideshow({house}){



    return(
        <div className="carroussel-container">
            <img src={leftChevron} className="left-chevron" alt="chevron gauche" />
            <img src={rightChevron} className="right-chevron" alt="chevron droite" />
            <div className="carrousel-box">
                <img src={house.cover} className="carroussel-img" alt="Illustration d'une falaise"/>
            </div>
        </div>

    )
}

export default Slideshow