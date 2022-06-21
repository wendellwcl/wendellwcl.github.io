//Css
import './contact.css'

//Styled-Components
import { Container, Title, ButtonLink } from '../../styled-components/styled-components'

const Contact = () => {

    return(
        <Container id="contact-container" className="container-fluid">

            <div className="container text-center">

                <Title>Entre em Contato</Title>

                <p>
                    Interesse em contar com meu trabalho ou alguma duvida para esclarecer?
                    <br />
                    Por favor entre em contato por alguma das opções abaixo:
                </p>

                <div className="row mt-5">

                    <div className="col-12 mb-4" id="email">
                        <i class="bi bi-envelope-fill"></i>
                        wendell.wcl19@gmail.com
                    </div>

                    <div className="col-12">
                        <ButtonLink href="https://www.linkedin.com/in/wendellwcl" target="_blank" role="button">
                            <i class="bi bi-linkedin"></i>Linkedin
                        </ButtonLink>
                        <ButtonLink href="https://github.com/wendellwcl" target="_blank" role="button">
                            <i class="bi bi-github"></i>Github
                        </ButtonLink>
                    </div>

                </div>
            </div>
        </Container>
    )

}

export default Contact