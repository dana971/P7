import "./house-info.scss"
import rating from "../../assets/images/star.svg"

function HouseInfo ({house}){

    return(
        <div className="house-info-container">

            <div className="house-info-box">
                <h1 className="house-info-title">{house.title}</h1>
                <span className="house-info-subtitle">{house.location}</span>

                <ul className="tags-container">
                    {house.tags?.map((tag, index) => (
                            <li key={index}>{tag}</li>
                        )
                    )}
                </ul>
            </div>


            <div className="house-info-host">
                <div className="house-info-host-box">
                    <div className="house-info-host-name">{house.host?.name}</div>
                    <img src={house.host?.picture} className="host-picture" alt="photo de l'hote"/>
                </div>

                <div className="rating">
                    <img src={rating}/>
                </div>

            </div>

        </div>
    )


}

export default HouseInfo