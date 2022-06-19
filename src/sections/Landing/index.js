//Css
import './landing.css'

//Assets
import Logo from '../../assets/img/logo wcl.png'

//Styled-Components
import { ButtonLink } from '../../styled-components/styled-components'

import { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'

const Landing = () => {

    useEffect(() => {
        VanillaTilt.init(document.querySelector("#img-tilt"), {
            max: 25,
            speed: 500,
        });
    }, [])

    return(
        <section className="container-fluid d-flex align-items-center justify-content-center" id="landing-container">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">
                        <h1 className="text-center text-md-start">
                            Olá, me chamo 
                            <br />
                            <strong id="name">Wendell </strong>
                            <br />
                            Dev Front-End
                        </h1>

                        <div id="btn-container">
                            <ButtonLink href="https://github.com/wendellwcl" target="blank" role="button">
                                <i class="bi bi-github"></i>Github
                            </ButtonLink>
                            <ButtonLink href="https://www.linkedin.com/in/wendell-corr%C3%AAa-lima-8a4312191/" target="blank" role="button">
                                <i class="bi bi-linkedin"></i>Linkedin
                            </ButtonLink>
                        </div>
                    </div>

                    <div className="col-md-6 d-none d-md-block" id="img-container">
                        <img src={Logo} alt="Logo WCL" className="img-fluid" id='img-tilt'/>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Landing