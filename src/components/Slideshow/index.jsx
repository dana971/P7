import "./Slideshow.scss";
import React, {useState} from "react";
import prevButton from "../../assets/images/chevron-left.svg"
import nextButton from "../../assets/images/chevron-right.svg"




export const CarouselItem =({picture, width}) => {
    return (
       <div className="carousel-item" >
           <img src={picture} alt="présentation de l'appartement" className="carousel-img"/>
       </div>
    );
};

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
            <div className="carousel-box"
                 style={{transform: `translateX(-${isActive * 100}%)`}} >

                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}

            </div>

            {React.Children.count(children) > 1 ?
            <div>

                <div className="indicators">
                    <img src={prevButton} alt="image précédente" className="previous-slide"
                         onClick={() => { updateIndex(isActive-1); }} />
                    <img src={nextButton} alt="image suivante" className="next-slide"
                         onClick={() => { updateIndex(isActive+1); }}/>
                </div>
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