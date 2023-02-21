import "./fiche-logement.scss"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HouseInfo from "../../components/House-info";
import Collapse from "../../components/Collapse";
import Slideshow from "../../components/Slideshow";


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
            <Slideshow house={house}/>
            <HouseInfo house={house}/>
            <div className="dropdown-container-short">
                <Collapse
                    title={"Description"}
                    description={house.description}
                />

                <Collapse
                    title={"Equipements"}
                    liste={house.equipments}
                />
            </div>

        </div>
    )
}

export default FicheLogement