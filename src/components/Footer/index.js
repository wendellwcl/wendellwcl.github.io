//Css
import './footer.css'

//Assets
import Signature from '../../assets/img/assinatura.png'

const Footer = () => {

    return(
        <footer id="footer-container" className="container-fliud text-center">

            <img src={Signature} alt="assinatura"/>

            <span>wendellwcl 2022&copy;</span>

        </footer>
    )

}

export default Footer