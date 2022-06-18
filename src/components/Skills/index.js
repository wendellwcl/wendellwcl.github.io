//Css
import './skills.css'

//Assets
import Html from '../../assets/img/icones-skills/html.png'
import Css from '../../assets/img/icones-skills/css.png'
import Javascript from '../../assets/img/icones-skills/javascript.png'
import Bootstrap from '../../assets/img/icones-skills/bootstrap.png'
import ReactIcon from '../../assets/img/icones-skills/react.png'
import Styledcomponents from '../../assets/img/icones-skills/styledcomponents.png'
import Github from '../../assets/img/icones-skills/github.png'
import Git from '../../assets/img/icones-skills/git.png'

import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Skills = () => {

    useEffect(() => {
        ScrollReveal({reset: true})
        ScrollReveal().reveal('.reveal1', {
            delay: 200
        })
        ScrollReveal().reveal('.reveal2', {
            delay: 250
        })
    }, [])

    return(
        <section id="skills-container">

            <h2 className="text-center">Minhas Habilidades</h2>

            <div className="container">

                <div className="row d-flex justify-content-around">

                    <div className="col-6 col-md-2">
                        <div className="reveal1 d-flex flex-column align-items-center">
                            <img src={Html} alt="icone html 5" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">html 5</h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-2">
                        <div className="reveal1 d-flex flex-column align-items-center">
                            <img src={Css} alt="icone css 3" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">css 3</h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-2">
                        <div className="reveal2 d-flex flex-column align-items-center">
                            <img src={Javascript} alt="icone javascript" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">javascript</h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-2">
                        <div className="reveal2 d-flex flex-column align-items-center">
                            <img src={Bootstrap} alt="icone bootstrap" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">bootstrap</h3>
                        </div>
                    </div>
                </div>

                <div className="row d-flex justify-content-around mt-0 mt-md-5">

                    <div className="col-6 col-md-2">
                        <div className="reveal1 d-flex flex-column align-items-center">
                            <img src={ReactIcon} alt="icone react" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">react</h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-2">
                        <div className="reveal1 d-flex flex-column align-items-center">
                            <img src={Styledcomponents} alt="icone styled components" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">styled components</h3>
                        </div>
                    </div>

                    <div className="col-6 col-md-2">
                        <div className="reveal2 d-flex flex-column align-items-center">
                            <img src={Github} alt="icone github" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">github</h3>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-2">
                        <div  className="reveal2 d-flex flex-column align-items-center">
                            <img src={Git} alt="icone git" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">git</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Skills