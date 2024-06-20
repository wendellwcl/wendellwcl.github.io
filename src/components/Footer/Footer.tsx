//Icons
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

//Components
import Logo from "../Logo/Logo";

//Styles
import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__container"]}>
                <div className={styles["logo"]}>
                    <a href="#">
                        <Logo />
                    </a>
                </div>

                <div className={styles["social-media"]}>
                    <a
                        className={styles["social-media__link"]}
                        href="https://www.instagram.com/wendell.wcl/"
                        target="_blank"
                    >
                        <BsInstagram />
                    </a>
                    <a
                        className={styles["social-media__link"]}
                        href="https://www.linkedin.com/in/wendellwcl/"
                        target="_blank"
                    >
                        <BsLinkedin />
                    </a>
                    <a className={styles["social-media__link"]} href="https://github.com/wendellwcl" target="_blank">
                        <BsGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
