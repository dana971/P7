import "./fiche-logement.scss"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HouseInfo from "../../components/House-info";
import Collapse from "../../components/Collapse";
import Slideshow, {CarouselItem} from "../../components/Slideshow";


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
        [id]);

    return(
        <div>
            {/*<Slideshow house={house}/>*/}
            <Slideshow>

                {house.pictures?.map((picture, index) => (

                <CarouselItem
                    key={index}
                    picture={picture}>
                </CarouselItem>
                ))}

            </Slideshow>
            <HouseInfo house={house}/>
            <div className="dropdown-container-short">
                <Collapse
                    title={"Description"}
                    description={house.description}
                />

                <Collapse
                    title={"Equipement"}
                    liste={house.equipments}
                />
            </div>

        </div>
    )
}

export default FicheLogement