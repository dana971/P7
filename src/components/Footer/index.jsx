import whiteLogo from "../../assets/images/logo-white.png"
import  "./footer.scss"

/**
 * Footer de l'application
 * @return {JSX.Element}
 * @constructor
 */
function Footer (){

    return(
        <footer className="footer">
            <img src={whiteLogo} alt="logo de l'enseigne kasa en blanc"/>
            <span className="footer_subtitle">© 2023 Kasa. All rights reserved</span>
        </footer>
    )
}

export default Footer