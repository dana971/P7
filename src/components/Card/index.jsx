import {useEffect, useState} from "react";
import "./card.scss";
import {Link} from "react-router-dom";

function DisplayHouse (){

    const [houses, setHouses] = useState([]);


    useEffect(() => {
        fetch(`/logements.json`)
            .then((res) => res.json())
            .then((houseData) => {
                setHouses(houseData)
            })
            .catch((error) => console.log(error))
    },
        []);



    return(
        <div className="card-container">
            {houses.map((house) =>(
                <Link to={`/fiche-logement/${house.id}`} className="card">
                    <div className="card-image">
                    <img src={house.cover} alt="design KasaRose" />
                    </div>
                    <span>{house.title}</span>
                </Link>)
            )}

        </div>
    )

}

export default DisplayHouse

