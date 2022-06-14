//Css
import './landing.css'

//Assets
import Logo from '../../assets/img/logo wcl.png'

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
        <section className="container-fluid" id="landing-container">
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

                        <div className="mb-5 mb-md-0" id="btn-container">
                            <a href="https://github.com/wendellwcl" target="blank" role="button"><i class="bi bi-github"></i>Github</a>
                            <a href="https://www.linkedin.com/in/wendell-corr%C3%AAa-lima-8a4312191/" target="blank" role="button"><i class="bi bi-linkedin"></i>Linkedin</a>
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