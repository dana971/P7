import falaise from "../../assets/images/img-falaise.png"
import "./banner.scss";

function Banner(){
    return(
    <div className="banner-img">
        <div className="banner-box">
            <img src={falaise} alt="Illustration d'une falaise"/>
        </div>
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>

    )
}

export default Banner