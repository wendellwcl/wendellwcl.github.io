//Icons
import { BsFileTextFill, BsTelephoneFill } from "react-icons/bs";

//Assets
import badgeImg from "../../assets/img/badge_hero.png";
import resume from "../../assets/pdf/Curriculo-Wendell.pdf";
import arrowLeft from "../../assets/svg/arrow_left.svg";
import arrowRight from "../../assets/svg/arrow_right.svg";

//Styles
import styles from "./HeroSection.module.scss";

const HeroSection = () => {
    return (
        <section className={styles["hero"]}>
            <div className={`${styles["hero__container"]} scroll_animation`}>
                <div className={styles["greeting-container"]}>
                    <div className={styles["greeting"]}>
                        <h1 className={styles["greeting__message"]}>
                            Olá,
                            <br />
                            eu sou <span className={styles["greeting__message--emphasis"]}>Wendell</span>
                        </h1>

                        <h2 className={styles["greeting__role"]}>&lt; Front-End Dev /&gt;</h2>

                        <p className={styles["greeting__graduation"]}>4º semestre - Sistemas para internet</p>

                        <div className={styles["btn-container"]}>
                            <a className={styles["btn"]} href={resume} target="_blank">
                                <BsFileTextFill />
                                Curriculo
                            </a>
                            <a className={styles["btn"]} href="#contact-section">
                                <BsTelephoneFill />
                                Contato
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles["badge-container"]}>
                    <div className={styles["badge"]}>
                        <img
                            className={styles["badge__img"]}
                            src={badgeImg}
                            alt="imagem de um crachá com a foto do desenvolvedor do site"
                        />
                        <img className={`${styles["badge__arrow"]} left`} src={arrowLeft} />
                        <img className={`${styles["badge__arrow"]} right`} src={arrowRight} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
