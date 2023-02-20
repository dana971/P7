import "./TAG.scss"
function TagName ({house}){

    return(
        <ul className="tags-container">

            {house.tags?.map((tag, index) => (

                <li key={index}>{tag}</li>
            )
        )}
        </ul>
)

}

export default TagName