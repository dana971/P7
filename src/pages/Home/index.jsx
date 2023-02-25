import Banner from "../../components/Banner";
import Card from "../../components/Card";
import React, {useEffect, useState} from "react";


/**
 * Page d'accueil de l'application
 * Appel des Elements Banner et Card
 * @return {JSX.Element}
 * @constructor
 */
function Home (){

    const [houses, setHouses] = useState([]);

    //Fetch du contenu du fichier json grace au hook useEffect
    useEffect(() => {
        fetch(`/logements.json`)
            .then((res) => res.json())
            .then((houseData) => {
                setHouses(houseData)
            })
            .catch((error) => console.log(error))
    },[]);


    return(
        <div>
            <Banner />
            <div className="card-container">
            {houses.map((house, index) =>(
                <Card house={house} key={index} />
            ))}
            </div>
        </div>

)
}

export default Home