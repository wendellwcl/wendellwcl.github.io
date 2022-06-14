//Css
import './skills.css'

//Assets
import Html from '../../assets/img/html.png'
import Css from '../../assets/img/css.png'
import Javascript from '../../assets/img/javascript.png'
import Bootstrap from '../../assets/img/bootstrap.png'
import ReactIcon from '../../assets/img/react.png'
import Styledcomponents from '../../assets/img/styledcomponents.png'
import Github from '../../assets/img/github.png'
import Git from '../../assets/img/git.png'

const Skills = () => {

    return(
        <section id="skills-container">
            <h2 className="text-center">Habilidades</h2>
            <div className="container">
                <div className="row row-cols-8 d-flex justify-content-around">
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={Html} alt="icone html 5" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">html 5</h3>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={Css} alt="icone css 3" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">css 3</h3>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={Javascript} alt="icone javascript" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">javascript</h3>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={Bootstrap} alt="icone bootstrap" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around mt-0 mt-md-5">
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={ReactIcon} alt="icone react" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">react</h3>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={Styledcomponents} alt="icone styled components" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">styled components</h3>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div>
                            <img src={Github} alt="icone github" className="img-fluid glass"/>
                            <h3 className="text-center mb-5 mb-md-0">github</h3>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div>
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