import { useEffect, useRef } from "react";

//Icons
import { BsList } from "react-icons/bs";

//Components
import Logo from "../Logo/Logo";

//Styels
import styles from "./Header.module.css";

const Header = () => {
    const navRef = useRef<HTMLElement>(null);
    const navBtnRef = useRef<HTMLButtonElement>(null);

    //Logic to hide navbar when clicking outside it is detected
    useEffect(() => {
        function hideNavbarOnClickOutside(e: MouseEvent) {
            if (
                !(e.target === navBtnRef.current) &&
                !navRef.current!.contains(e.target as HTMLElement)
            ) {
                hideNavbar();
            }
        }

        document.addEventListener("click", (e) => hideNavbarOnClickOutside(e));
    }, []);

    //Display and hide navbar
    function toggleNav() {
        if (navRef.current!.classList.contains("show")) {
            navRef.current!.classList.remove("show");
        } else {
            navRef.current!.classList.add("show");
        }
    }

    //Hide navbar
    function hideNavbar() {
        navRef.current!.classList.remove("show");
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <div className={styles.logo_container}>
                    <a href="#hero-section">
                        <Logo />
                    </a>
                </div>

                <nav className={styles.navbar} ref={navRef}>
                    <ul>
                        <li>
                            <a
                                href="#about-section"
                                onClick={() => hideNavbar()}
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills-section"
                                onClick={() => hideNavbar()}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects-section"
                                onClick={() => hideNavbar()}
                            >
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact-section"
                                className={styles.contact_btn}
                                onClick={() => hideNavbar()}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>

                <button
                    className={styles.nav_btn}
                    onClick={() => toggleNav()}
                    ref={navBtnRef}
                >
                    <BsList />
                </button>
            </div>
        </header>
    );
};

export default Header;
