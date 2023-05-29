import "./fiche-logement.css"
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import HouseInfo from "../../components/House-info";
import Collapse from "../../components/Collapse";
import Slideshow, {SlideshowItem} from "../../components/Slideshow";
import {useNavigate} from "react-router-dom";


/**
 *  Page fiche-logement
 *  Fetch du Fichier Json
 * @return {JSX.Element}
 * @constructor
 */
function FicheLogement (){

    const [house, setHouse] = useState([]);
    let {id} = useParams();
    const navigate = useNavigate();

    // Fetch du contenu de notre fichier Json grace au hook useEffect
    useEffect(() => {
            fetch(`${process.env.PUBLIC_URL}/logements.json`)
                .then((res) => res.json())
                .then((houseData) => {
                    // permet de vérifier qu'une house a bien été trouvée
                    let houseFinded = false;
                    // eslint-disable-next-line array-callback-return
                    houseData.map((house) => {
                        if(house.id === id) {
                            houseFinded = true;
                            setHouse(house);
                        }
                    })
                    // si aucune house n'a été trouvée / on renvoie vers la page Error
                    if (houseFinded === false) {
                        return navigate("*");
                    }
                })
                .catch((error) => console.log(error))
        },
        [id,navigate]);

    return(
        <div>
            <Slideshow>
                {house.pictures?.map((picture, index) => (
                    <SlideshowItem
                        key={index}
                        picture={picture}
                    />
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