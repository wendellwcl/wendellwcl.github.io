//Icons
import { BsFileTextFill, BsTelephoneFill } from "react-icons/bs";

//Assets
import arrowLeft from "../../assets/arrow_left.svg";
import arrowRight from "../../assets/arrow_right.svg";
import badgeImg from "../../assets/badge_hero.png";
import resume from "../../assets/Curriculo-Wendell.pdf";

//Styles
import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.hero_section}>
            <div className={`${styles.hero_container} scroll_animation`}>
                <div className={styles.greeting_container}>
                    <div className={styles.greeting_wrapper}>
                        <h1 className={styles.greeting}>
                            Olá,
                            <br />
                            eu sou <span className={styles.name}>Wendell</span>
                        </h1>

                        <h2 className={styles.role}>
                            &lt;Desenvolvedor Front-End /&gt;
                        </h2>

                        <p className={styles.graduation}>
                            3º semestre - Sistemas para internet
                        </p>

                        <div className={styles.btn_container}>
                            <a
                                className={styles.btn}
                                href={resume}
                                target="_blank"
                            >
                                <BsFileTextFill />
                                Curriculo
                            </a>
                            <a className={styles.btn} href="#contact-section">
                                <BsTelephoneFill />
                                Contato
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.img_container}>
                    <div className={styles.badge_img_wrapper}>
                        <img
                            className={styles.badge_img}
                            src={badgeImg}
                            alt="imagem de um crachá com a foto do desenvolvedor do site"
                        />
                        <img
                            className={`${styles.arrow_img} left`}
                            src={arrowLeft}
                        />
                        <img
                            className={`${styles.arrow_img} right`}
                            src={arrowRight}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
