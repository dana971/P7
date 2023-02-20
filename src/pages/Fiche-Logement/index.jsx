import "./fiche-logement.scss"
import Carrousel from "../../components/Slideshow";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HouseInfo from "../../components/House-info";


function FicheLogement (){

    const [house, setHouse] = useState([]);
    let {id} = useParams();


    useEffect(() => {
            fetch(`/logements.json`)
                .then((res) => res.json())
                .then((houseData) => {
                    houseData.map((house) => {
                        if(house.id === id) {
                            setHouse(house);
                        }
                    })
                })
                .catch((error) => console.log(error))
        },
        []);

    return(
        <div>
            <Carrousel house={house}/>
            <HouseInfo house={house}/>
        </div>
    )
}

export default FicheLogement