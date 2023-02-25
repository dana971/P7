import "./house-info.scss"
import rating from "../../assets/images/star.svg"


function HouseInfo ({house}){

    const ratingNumbers = parseInt(house.rating)
    const tabNumbers= [1,2,3,4,5]


    return(
        <div className="house-info-container">

            <div className="house-info-box">
                <h1 className="house-info-title">{house.title}</h1>
                <span className="house-info-address">{house.location}</span>

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
                    <img src={house.host?.picture} className="host-picture" alt="Avatar de l'hôte"/>
                </div>

                <div className="rating">
                    {tabNumbers.map((number, index) => {
                        const isOrange =  number <= ratingNumbers;
                        return (
                            <img key={index} src={rating} className={isOrange ? "rating-orange" : "rating-grey"} alt="Note du logement"/>
                        )
                    })}
                </div>
            </div>
        </div>
    )


}

export default HouseInfo