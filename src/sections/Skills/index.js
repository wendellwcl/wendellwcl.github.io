//Css
import './skills.css'

//Assets
import HtmlImg from '../../assets/img/icones-skills/html.png'
import CssImg from '../../assets/img/icones-skills/css.png'
import JavascriptImg from '../../assets/img/icones-skills/javascript.png'
import BootstrapImg from '../../assets/img/icones-skills/bootstrap.png'
import ReactImg from '../../assets/img/icones-skills/react.png'
import StyledcomponentsImg from '../../assets/img/icones-skills/styledcomponents.png'
import GithubImg from '../../assets/img/icones-skills/github.png'
import GitImg from '../../assets/img/icones-skills/git.png'

//Styled-Components
import { Container, Title, Skill } from '../../styled-components/styled-components'

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
        <Container id="skills-container" className='background-gradient'>

            <Title color='var(--light)'>Minhas Habilidades</Title>

            <div className="container px-0 px-md-5">

                <div className="row d-flex justify-content-around">

                    <div className="col-6 col-md-2">
                        <Skill className="reveal1">
                            <img src={HtmlImg} alt="icone html 5"/>
                            <h3 className="mb-5 mb-md-0">html 5</h3>
                        </Skill>
                    </div>

                    <div className="col-6 col-md-2">
                        <Skill className="reveal1">
                            <img src={CssImg} alt="icone css 3"/>
                            <h3 className="mb-5 mb-md-0">css 3</h3>
                        </Skill>
                    </div>

                    <div className="col-6 col-md-2">
                        <Skill className="reveal2">
                            <img src={JavascriptImg} alt="icone javascript"/>
                            <h3 className="mb-5 mb-md-0">javascript</h3>
                        </Skill>
                    </div>

                    <div className="col-6 col-md-2">
                        <Skill className="reveal2">
                            <img src={BootstrapImg} alt="icone bootstrap"/>
                            <h3 className="mb-5 mb-md-0">bootstrap</h3>
                        </Skill>
                    </div>
                </div>

                <div className="row d-flex justify-content-around mt-0 mt-md-5">

                    <div className="col-6 col-md-2">
                        <Skill className="reveal1">
                            <img src={ReactImg} alt="icone react"/>
                            <h3 className="mb-5 mb-md-0">react</h3>
                        </Skill>
                    </div>

                    <div className="col-6 col-md-2">
                        <Skill className="reveal1">
                            <img src={StyledcomponentsImg} alt="icone styled components"/>
                            <h3 className="mb-5 mb-md-0">styled components</h3>
                        </Skill>
                    </div>

                    <div className="col-6 col-md-2">
                        <Skill className="reveal2">
                            <img src={GithubImg} alt="icone github"/>
                            <h3>github</h3>
                        </Skill>
                    </div>
                    
                    <div className="col-6 col-md-2">
                        <Skill  className="reveal2">
                            <img src={GitImg} alt="icone git"/>
                            <h3>git</h3>
                        </Skill>
                    </div>
                </div>
            </div>
        </Container>
    )

}

export default Skills