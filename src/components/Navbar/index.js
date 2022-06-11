//Css
import './navbar.css';

//Assets
import Logo from '../../assets/img/icone.png';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg fixed-top">

            <div className="container">
                
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="icone" id="icon-navbar"/>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-top" aria-controls="navbar-top" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar-top">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 4</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link 5</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar