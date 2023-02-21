import "./Slideshow.scss"
import leftChevron from "../../assets/images/chevron-left.svg"
import rightChevron from "../../assets/images/chevron-right.svg"

function Slideshow({house}){

 export const carouselItem =({children,width}) => {
       return (
           <div className="carousel-item">
             <img src="./../assets/images/img-vallee.png"/>
               {children}
           </div>
       );
   };

 Slideshow = ({children}) => {

    return(
        <div className="carousel-container">
            <div className="carousel-box">
                {React.Children.map(children, (child, index)=>{
                    return React.cloneElement(child);
                })}

            </div>
        </div>

    )
}

}

export default Slideshow