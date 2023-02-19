import {useEffect, useState} from "react";
import "./card.scss";

function DisplayHouse (){

    const [houses, setHouses] = useState([]);


    useEffect(() => {
        fetch(`/logements.json`)
            .then((res) => res.json())
            .then((houseData) => {
                setHouses(houseData)
                console.log(houseData)
            })
            .catch((error) => console.log(error))
    },
        []);



    return(
        <div className="card-container">
            {houses.map((house) =>(
                <div className="card">
                    <div className="card-image">
                    <img src={house.cover} alt="design KasaRose" />
                    </div>
                    <span>{house.title}</span>
                </div>)
            )}

        </div>
    )

}

export default DisplayHouse

