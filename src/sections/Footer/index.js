//Css
import './footer.css'

//Assets
import Signature from '../../assets/img/assinatura.png'

//Styled-Components
import { FooterContainer } from '../../styled-components/styled-components'

const Footer = () => {

    return(
        <FooterContainer id="footer-container" className="container-fliud text-center background-gradient">

            <img src={Signature} alt="assinatura"/>

            <span>wendellwcl 2022&copy;</span>

        </FooterContainer>
    )

}

export default Footer