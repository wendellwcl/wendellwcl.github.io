//Css
import './projects.css'

//Assets
import TimeDaTemporada from '../../assets/img/projetos-capa/timedatemporada.png'
import Jokenpo from '../../assets/img/projetos-capa/jokenpo.png'
import JogoDaVelha from '../../assets/img/projetos-capa/jogodavelha.png'
import MyArt from '../../assets/img/projetos-capa/myart.png'
import Calculadora from '../../assets/img/projetos-capa/calculadora.png'
import Gerador from '../../assets/img/projetos-capa/geradordesenhas.png'
import Filmaria from '../../assets/img/projetos-capa/filmaria.png'
import Finans from '../../assets/img/projetos-capa/finans.png'
import SpotifyClone from '../../assets/img/projetos-capa/spotifyclone.png'
import EmBreve from '../../assets/img/projetos-capa/embreve.png'

//Styled-Components
import { Container, Title, Card, Button, ButtonLink } from '../../styled-components/styled-components'

import { useState, useRef } from 'react'

const Projects = () => {

    const btnRef = useRef()

    const personalProjects = [
        {
            img: TimeDaTemporada,
            name: 'Time da Temporada',
            link: 'https://wendellwcl.github.io/TimeDaTemporada-2022/'
        },
        {
            img: Jokenpo,
            name: 'JoKenPo',
            link: 'https://wendellwcl.github.io/JogoJokenpo/'
        },
        {
            img: JogoDaVelha,
            name: 'Jogo da Velha',
            link: 'https://wendellwcl.github.io/JogoDaVelha/'
        }
    ]

    const showMoreProjects = [
        {
            img: MyArt,
            name: 'MyArt',
            link: 'https://wendellwcl.github.io/MyArt/'
        },
        {
            img: Calculadora,
            name: 'Calculadora',
            link: 'https://wendellwcl.github.io/Calculadora/'
        },
        {
            img: Gerador,
            name: 'Gera Senhas',
            link: 'https://wendellwcl.github.io/GeradorDeSenhas/'
        }
    ]

    const academicProjects = [
        {
            img: Filmaria,
            name: 'Filmaria',
            link: 'https://wendellwcl.github.io/Filmaria/'
        },
        {
            img: Finans,
            name: 'Finans',
            link: 'https://wendellwcl.github.io/Finans/'
        },
        {
            img: SpotifyClone,
            name: 'Spotify Clone',
            link: 'https://wendellwcl.github.io/Spotify-Clone/'
        }
    ]

    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {

        if(showMore){
            setShowMore(false)
        } else {
            setShowMore(true)
        }

        btnRef.current.classList.toggle('show')
    }

    return(
        <Container id="projects-container">
            
            <Title>Meus Projetos</Title>

            <div className="container mb-2" id="container-projetos-pessoais">

                <div className="row d-flex justify-content-around mb-0 mb-md-3">

                    <h3>Projetos pessoais</h3>

                    {personalProjects.map(item => (
                        <Card className="col-12 col-md-3 g-0 card mb-3">
                            <img src={item.img} alt={`capa do site ${item.name}`} className="card-img-top"/>
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                {item.link && 
                                    <ButtonLink href={item.link} target="_blank" rel="noreferrer" className="stretched-link card-btn">Visitar</ButtonLink>
                                }
                            </div>
                        </Card>
                    ))}

                </div>
                
                <div className="row d-flex justify-content-around mb-0 mb-md-3" id="show-more" ref={btnRef}>

                    {showMoreProjects.map(item => (
                        <Card className="col-12 col-md-3 g-0 card mb-3">
                            <img src={item.img} alt={`capa do site ${item.name}`} className="card-img-top"/>
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                {item.link && 
                                    <ButtonLink href={item.link} target="_blank" rel="noreferrer" className="stretched-link card-btn">Visitar</ButtonLink>
                                }
                            </div>
                        </Card>
                    ))}

                </div>

                <Button type="button" className="d-flex mx-auto mb-5" onClick={() => handleShowMore()}>
                    {showMore ? <span><i class="bi bi-dash-circle"></i>Ver menos</span> : <span><i class="bi bi-plus-circle"></i>Ver mais</span>}
                </Button>

            </div>

            <div className="container" id="container-projetos-academicos">
                <div className="row d-flex justify-content-around mb-0 mb-md-3">

                    <h3>Projetos acadêmicos</h3>

                    {academicProjects.map(item => (
                        <Card className="col-12 col-md-3 g-0 card mb-3">
                            <img src={item.img} alt={`capa do site ${item.name}`} className="card-img-top"/>
                            <div className="card-body">
                                <h3>{item.name}</h3>
                                {item.link && 
                                    <ButtonLink href={item.link} target="_blank" rel="noreferrer" className="stretched-link card-btn">Visitar</ButtonLink>
                                }
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </Container>
    )

}

export default Projects