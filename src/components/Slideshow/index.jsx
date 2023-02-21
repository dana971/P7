import "./Slideshow.scss";
import React, {useState} from "react";
import leftChevron from "../../assets/images/chevron-left.svg"
import rightChevron from "../../assets/images/chevron-right.svg"

//function Slideshow({house}){

export const CarouselItem =({picture, width}) => {
    return (
       <div className="carousel-item" style={{width}}>
           <img src={picture} alt=""/>
       </div>
    );
};

const Slideshow = ({children}) => {

    const [isActive, setIsActive] = useState(0)

    const updateIndex = (newIndex) => {

        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)){
             newIndex = React.Children.count(children)-1;
        }
        setIsActive(newIndex);
    }

    return(
        <div className="carousel-container">
            <div className="carousel-box"
                 style={{transform: `translateX(-${isActive * 100}%)`}}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: "100%" });
                })}
            </div>
            <div className="indicators">
                <button className="prev"
                        onClick={() => { updateIndex(isActive-1);
                        }}>
                Précédent
                </button>
                <button className="next"
                        onClick={() => { updateIndex(isActive+1);
                }}>
                Suivant
                </button>
            </div>
        </div>

    );
};



export default Slideshow