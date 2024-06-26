import { useEffect, useRef } from "react";

//Icons
import { BsList } from "react-icons/bs";

//Components
import Logo from "../Logo/Logo";

//Styles
import styles from "./Header.module.scss";

const Header = () => {
    const navRef = useRef<HTMLElement>(null);
    const navBtnRef = useRef<HTMLButtonElement>(null);

    //Logic to hide navbar when clicking outside it is detected
    useEffect(() => {
        function hideNavbarOnClickOutside(e: MouseEvent) {
            if (!(e.target === navBtnRef.current) && !navRef.current!.contains(e.target as HTMLElement)) {
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
        <header className={styles["header"]}>
            <div className={styles["header__container"]}>
                <div className={styles["logo"]}>
                    <a href="#">
                        <Logo />
                    </a>
                </div>

                <nav className={styles["navbar"]} ref={navRef}>
                    <ul className={styles["navlist"]}>
                        <li className={styles["navitem"]}>
                            <a className={styles["navlink"]} href="#about-section" onClick={() => hideNavbar()}>
                                Sobre
                            </a>
                        </li>
                        <li className={styles["navitem"]}>
                            <a className={styles["navlink"]} href="#skills-section" onClick={() => hideNavbar()}>
                                Skills
                            </a>
                        </li>
                        <li className={styles["navitem"]}>
                            <a className={styles["navlink"]} href="#projects-section" onClick={() => hideNavbar()}>
                                Projetos
                            </a>
                        </li>
                        <li className={styles["navitem"]}>
                            <a
                                className={styles["navlink--emphasis"]}
                                href="#contact-section"
                                onClick={() => hideNavbar()}
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </nav>

                <button className={styles["nav-mobile-btn"]} onClick={() => toggleNav()} ref={navBtnRef}>
                    <BsList />
                </button>
            </div>
        </header>
    );
};

export default Header;
