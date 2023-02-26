import "./banner.css"

/**
 * Composant renvoyant le Banner
 * @return {JSX.Element}
 * @constructor
 */
function Banner({picture, alt, className="", title=""}){

    return(
    <div className={"banner-img " + className}>
        <div className="banner-box">
            <img src={picture} alt={alt}/>
        </div>

        {title === "" ?
            <div></div>
        :
            <h1 className="banner-title">{title}</h1>
        }

    </div>

    )
}

export default Banner