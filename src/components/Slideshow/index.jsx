import "./Slideshow.scss"

function Slideshow({house}){
    return(
        <div className="carroussel-container">
            <div className="carrousel-box">
                <img src={house.cover} className="carroussel-img" alt="Illustration d'une falaise"/>
            </div>
        </div>

    )
}

export default Slideshow