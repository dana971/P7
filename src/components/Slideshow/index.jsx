

function Slideshow({house}){
    return(
        <div className="caroussel-container">
            <div className="carrousel-box">
                <img src={house.cover} alt="Illustration d'une falaise"/>
            </div>
        </div>

    )
}

export default Slideshow