//Css
import './introduction.css'

//Styled-Components
import { Container, Title, Emphasis } from '../../styled-components/styled-components'

const Introduction = () => {

    return(
        <Container className="container" id="introduction-container">

            <Title>Apresentação</Title>

            <p>
                <Emphasis color="var(--color)">Seja muito bem-vindo(a).</Emphasis>
                <br /><br />
                Prazer, eu sou o <Emphasis color="var(--color)">Wendell</Emphasis>. Comecei a estudar sobre <Emphasis color="var(--color)">desenvolvimento web</Emphasis> no início de 2021, e desde lá estudo por conta própria.
                Em um futuro próximo pretendo cursar Sistemas para Internet ou algum outro curso equivalente da área. Quero <Emphasis color="var(--color)">iniciar minha carreira como desenvolvedor <nobr>front-end</nobr></Emphasis> e busco minha primeira oportunidade profissional.
                Acredito já ser capaz de entregar <Emphasis color="var(--color)">valor e resultado</Emphasis> rapidamente em projetos reais se apoiado e habilitado.
                Aqui no meu portifólio demonstro meus conhecimentos, qualidade técnica e o que sou capaz de realizar.
                Espero que goste do que irá ver e que desperte interesse em <Emphasis color="var(--color)">me ter como parte do time da sua organização</Emphasis>.
            </p>
        </Container>
    )

}

export default Introduction