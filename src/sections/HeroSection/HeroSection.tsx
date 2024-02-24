//Icons
import { BsGithub, BsLinkedin } from "react-icons/bs";

//Assets
import badgeImg from "../../assets/badge.png";

//Styles
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.hero_section}>
            <div className={styles.hero_container}>
                <div className={styles.hero_greeting}>
                    <h1 className={styles.greeting}>
                        Olá,
                        <br />
                        eu sou <span className={styles.name}>Wendell</span>
                    </h1>
                    <h2 className={styles.role}>
                        &lt; Desenvolvedor Front-End /&gt;
                    </h2>
                    <p className={styles.graduation}>
                        3º semestre - Sistemas para internet
                    </p>

                    <div className={styles.professional_networks}>
                        <a
                            className={styles.btn}
                            href="https://www.linkedin.com/in/wendellwcl/"
                            target="_blank"
                        >
                            <BsLinkedin />
                            Linkedin
                        </a>
                        <a
                            className={styles.btn}
                            href="https://github.com/wendellwcl"
                            target="_blank"
                        >
                            <BsGithub />
                            Github
                        </a>
                    </div>
                </div>

                <div className={styles.hero_img}>
                    <img
                        src={badgeImg}
                        alt="imagem de um crachá com a foto do desenvolvedor do site"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
