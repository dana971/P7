import "./A-propos.css"
import laVallee from "../../assets/images/img-vallee.png"
import Collapse from "../../components/Collapse"
import Banner from "../../components/Banner";

/**
 * Page About
 * @return {JSX.Element}
 * @constructor
 */
function About (){

     let aboutData = [
         {title: "Fiabilité",content : "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."},
         {title: "Respect" , content :"La bienveillance fait partie des valeurs fondatrices de Kasa.Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."},
         {title:"Service", content :"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."},
         {title:"Responsabilité",content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."},
     ]

    return(
        <div>
            <Banner className="about-img"
                picture={laVallee}
                alt="Illustration d'une vallée enneigée"

            />

            <div className="dropdown-container">
                {aboutData?.map((data,index) =>(

                    <Collapse
                        key={index}
                        title={data.title}
                        description={data.content}
                    />
                ))}
            </div>
        </div>
    )
}

export default About