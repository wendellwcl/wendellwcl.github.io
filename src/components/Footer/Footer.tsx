//Icons
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

//Components
import Logo from "../Logo/Logo";

//Styles
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.logo_container}>
                    <a href="#hero-section">
                        <Logo />
                    </a>
                </div>

                <div className={styles.social_media_container}>
                    <a
                        href="https://www.instagram.com/wendell.wcl/"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/wendellwcl/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                    <a href="https://github.com/wendellwcl" target="_blank">
                        <BsGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
