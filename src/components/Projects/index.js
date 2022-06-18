//Css
import './projects.css'

//Assets
import Jokenpo from '../../assets/img/projetos-capa/jokenpo.png'
import JogoDaVelha from '../../assets/img/projetos-capa/jogodavelha.png'
import MyArt from '../../assets/img/projetos-capa/myart.png'
import Calculadora from '../../assets/img/projetos-capa/calculadora.png'
import Gerador from '../../assets/img/projetos-capa/geradordesenhas.png'
import Filmaria from '../../assets/img/projetos-capa/filmaria.png'
import Finans from '../../assets/img/projetos-capa/finans.png'
import SpotifyClone from '../../assets/img/projetos-capa/spotifyclone.png'
import EmBreve from '../../assets/img/projetos-capa/embreve.png'

import { useState, useRef } from 'react'

const Projects = () => {

    const btnRef = useRef()

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
        <section id="projects-container">
            
            <h2 className="text-center">Meus Projetos</h2>

            <div className="container mb-2" id="container-projetos-pessoais">
                <div className="row d-flex justify-content-around mb-0 mb-md-3">

                    <h3>Projetos pessoais</h3>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3 mb-md-0">
                        <img src={Jokenpo} alt="capa do site: JoKenPo" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">JoKenPo</h3>
                            <a href="https://wendellwcl.github.io/JogoJokenpo/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3 mb-md-0">
                        <img src={JogoDaVelha} alt="capa do site: Jogo da Velha" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Jogo da Velha</h3>
                            <a href="https://wendellwcl.github.io/JogoDaVelha/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3 mb-md-0">
                        <img src={MyArt} alt="capa do site: MyArt" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">MyArt</h3>
                            <a href="https://wendellwcl.github.io/MyArt/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>
                </div>
                
                <div className="row d-flex justify-content-around mb-0 mb-md-3" id="show-more" ref={btnRef}>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3">
                        <img src={Calculadora} alt="capa do site: Calculadora" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Calculadora</h3>
                            <a href="https://wendellwcl.github.io/Calculadora/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3">
                        <img src={Gerador} alt="capa do site: Gerador de Senhas" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Gera Senhas</h3>
                            <a href="https://wendellwcl.github.io/GeradorDeSenhas/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3">
                        <img src={EmBreve} alt="capa do site: MyArt" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Em Breve...</h3>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="d-flex mx-auto btn mb-5" onClick={() => handleShowMore()}>
                {showMore ? <span><i class="bi bi-dash-circle-fill me-2"></i>ver menos</span> : <span><i class="bi bi-plus-circle-fill me-2"></i>ver mais</span>}
            </button>

            <div className="container" id="container-projetos-academicos">
                <div className="row d-flex justify-content-around mb-0 mb-md-3">

                    <h3>Projetos acadêmicos</h3>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3 mb-md-0">
                        <img src={Filmaria} alt="capa do site: Filmaria" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Filmaria</h3>
                            <a href="https://wendellwcl.github.io/Filmaria/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3 mb-md-0">
                        <img src={Finans} alt="capa do site: Finans" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Finans</h3>
                            <a href="https://wendellwcl.github.io/Finans/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 g-0 card text-end mb-3 mb-md-0">
                        <img src={SpotifyClone} alt="capa do site: Spotify Clone" className="card-img-top"/>
                        <div className="card-body">
                            <h3 className="card-title text-start">Spotify Clone</h3>
                            <a href="https://wendellwcl.github.io/Spotify-Clone/" target="_blank" rel="noreferrer" className="stretched-link">Visitar</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Projects