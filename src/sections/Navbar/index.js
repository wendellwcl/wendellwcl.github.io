//Css
import './navbar.css';

//Assets
import Logo from '../../assets/img/icone.png';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg fixed-top">

            <div className="container">
                
                <a className="navbar-brand" href="#landing-container">
                    <img src={Logo} alt="icone" id="icon-navbar"/>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-top" aria-controls="navbar-top" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar-top">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#introduction-container">Apresentação</a>
                        </li>
                        <li className="nav-item ms-0 ms-md-3">
                            <a className="nav-link" href="#skills-container">Habilidades</a>
                        </li>
                        <li className="nav-item ms-0 ms-md-3">
                            <a className="nav-link" href="#projects-container">Projetos</a>
                        </li>
                        <li className="nav-item ms-0 ms-md-3">
                            <a className="nav-link" href="#faq-container">Mais sobre</a>
                        </li>
                        <li className="nav-item ms-0 ms-md-3">
                            <a className="nav-link" href="#contact-container">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar