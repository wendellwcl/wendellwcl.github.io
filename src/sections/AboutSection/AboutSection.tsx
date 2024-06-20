//Icons
import { BsFileTextFill } from "react-icons/bs";

//Assets
import badgeImg from "../../assets/img/badge_about.png";
import resume from "../../assets/pdf/Curriculo-Wendell.pdf";

//Styles
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
    return (
        <section className={styles["about"]}>
            <span className={styles["about__anchor"]} id="about-section"></span>
            <div className={styles["about__container"]}>
                <div className={`${styles["about__content"]} scroll_animation`}>
                    <div className={styles["about__img"]}>
                        <img src={badgeImg} alt="imagem de um crachá com a foto do desenvolvedor do site" />
                    </div>

                    <div className={styles["about__text"]}>
                        <div className={styles["text"]}>
                            <h3 className={styles["text__title"]}>Sobre</h3>

                            <p className={styles["text__content"]}>
                                Olá! Meu nome é <span className={styles["emphasis"]}>Wendell</span>, e tenho como
                                objetivo transformar ideias em realidade digital. Como{" "}
                                <span className={styles["emphasis"]}>desenvolvedor web front-end</span> busco sempre
                                entregar projetos que não apenas atendam às necessidades do cliente, mas também
                                proporcionem uma{" "}
                                <span className={styles["emphasis"]}>experiência excepcional aos usuários</span>. Se
                                você está procurando um desenvolvedor front-end comprometido, criativo e orientado para
                                resultados,{" "}
                                <span className={styles["emphasis"]}>estou pronto para fazer parte do seu time</span>.
                            </p>

                            <a href={resume} target="_blank" className={styles["resume-btn"]}>
                                <BsFileTextFill />
                                Ver Curriculo
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
