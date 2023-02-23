import "./fiche-logement.scss"
import {useEffect, useState} from "react";
import {useParams, redirect} from "react-router-dom";
import HouseInfo from "../../components/House-info";
import Collapse from "../../components/Collapse";
import Slideshow, {CarouselItem} from "../../components/Slideshow";
import {useNavigate} from "react-router-dom";


function FicheLogement (){

    const [house, setHouse] = useState([]);
    let {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
            fetch(`/logements.json`)
                .then((res) => res.json())
                .then((houseData) => {
                    let houseFinded = false;
                    houseData.map((house, i, array) => {
                        console.log(i+" index");
                        console.log(array);
                        if(house.id === id) {
                            houseFinded = true;
                            setHouse(house);
                        }
                    })
                    if (houseFinded === false) {
                        return navigate("*");
                    }
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