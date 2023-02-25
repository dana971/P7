import "./Slideshow.scss";
import React, {useState} from "react";
import prevButton from "../../assets/images/chevron-left.svg"
import nextButton from "../../assets/images/chevron-right.svg"

/**
 * Fonction qui génère 1 item du carrousel
 * @param picture
 * @param index
 * @return {JSX.Element}
 * @constructor
 */
export const SlideshowItem =({picture, index}) => {
    return (
       <div className="carousel-item" key={index}>
           <img src={picture} alt="présentation de l'appartement" className="carousel-img"/>
       </div>
    );
};


/**
 * Fonction qui génère tous les items du carrousel ainsi que le parent
 * @param children
 * @return {JSX.Element}
 * @constructor
 */
const Slideshow = ({children}) => {

    const [isActive, setIsActive] = useState(0)

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) -1 ;
        } else if (newIndex >= React.Children.count(children)){
            newIndex = 0;
        }
        setIsActive(newIndex);
    }


    return(
        <div className="carousel-container">
            {/* Corps du carrousel */}
            <div className="carousel-box"
                 style={{transform: `translateX(-${isActive * 100}%)`}} >

                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}

            </div>

            {/* Condition qui vérifie si on doit afficher les boutons d'actions ou pas */}
            {React.Children.count(children) > 1 ?
            <div>
                {/* Affichage des boutons d'actions */}
                <div className="indicators">
                    <img src={prevButton} alt="image précédente" className="previous-slide"
                         onClick={() => { updateIndex(isActive-1); }} />
                    <img src={nextButton} alt="image suivante" className="next-slide"
                         onClick={() => { updateIndex(isActive+1); }}/>
                </div>
                {/* Affichage de l'indicateur dynamique */}
                <div className="current-index">
                    <span>{isActive+1}/{React.Children.count(children)}</span>
                </div>
            </div>
            :
            <div></div>}


        </div>
    );
};



export default Slideshow