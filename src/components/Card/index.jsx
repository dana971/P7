import {useEffect, useState} from "react";
import "./card.scss";

function DisplayHouse (){
/*
    const [houses, setHouses] = useState({});


    useEffect(() => {
        fetch(`/logements.json`)
            .then((res) => res.json()
                .then((houseData)=>console.log(houseData))
                .catch((error) => console.log(error))
            )
    }, [])

 */

    return(
        <div className="card-container">
            <div className="card">
                <div className="card-image">
                    <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="design KasaRose" />
                </div>
                <span>Carte pas sympa</span>
            </div>
        </div>
    )

}

export default DisplayHouse



/*
function Card (){

    return(
        <div className="card-container">
            <div className="car">
                <span></span>
            </div>
        </div>
    )
}

export default Card
 */