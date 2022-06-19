//Css
import './faq.css'

//Styled-Components
import { Container, Title, Emphasis } from '../../styled-components/styled-components'

const Faq = () => {

    return(
        <Container id="faq-container" className="container-fluid background-gradient">

            <div className="container">

                <Title color='var(--light)'>Mais Sobre Mim</Title>

                <details open className="mb-5">
                    <summary>Experiência profissional em uma Multinacional</summary>
                    <p>
                        Participei do time de uma <Emphasis color='var(--dark)'>Multinacional de grande porte, Ericsson</Emphasis>, durante 2 anos.
                        Tal experiência foi bastante positiva, sendo uma ótima escola para minha formação como profissional.
                    </p>
                </details>

                <details open>
                    <summary>Habilidades complementares - Design</summary>
                    <p>
                        Possuo conhecimentos sobre <Emphasis color='var(--dark)'>Design e Motion Design</Emphasis>, que me permitem ter uma boa compreensão sobre aspectos estéticos e funcionais relacionados a área visual.
                    </p>
                </details>

            </div>
        </Container>
    )

}

export default Faq