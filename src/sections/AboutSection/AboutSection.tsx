//Icons
import { BsFileTextFill } from "react-icons/bs";

//Assets
import badgeImg from "../../assets/img/badge_about.png";
import resume from "../../assets/pdf/Curriculo-Wendell.pdf";

//Styles
import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <section className={styles.about_section}>
            <span className={styles.section_anchor} id="about-section"></span>
            <div className={styles.about_container}>
                <div className={`${styles.about_wrapper} scroll_animation`}>
                    <div className={styles.about_img}>
                        <img
                            src={badgeImg}
                            alt="imagem de um crachá com a foto do desenvolvedor do site"
                        />
                    </div>

                    <div className={styles.about_text}>
                        <div className={styles.text_wrapper}>
                            <h3 className={styles.title}>Sobre</h3>

                            <p className={styles.text}>
                                Olá! Meu nome é{" "}
                                <span className={styles.highlight}>
                                    Wendell
                                </span>
                                , e tenho como objetivo transformar ideias em
                                realidade digital. Como{" "}
                                <span className={styles.highlight}>
                                    desenvolvedor web front-end
                                </span>{" "}
                                busco sempre entregar projetos que não apenas
                                atendam às necessidades do cliente, mas também
                                proporcionem uma{" "}
                                <span className={styles.highlight}>
                                    experiência excepcional aos usuários
                                </span>
                                . Se você está procurando um desenvolvedor
                                front-end comprometido, criativo e orientado
                                para resultados,{" "}
                                <span className={styles.highlight}>
                                    estou pronto para fazer parte do seu time
                                </span>
                                .
                            </p>

                            <a
                                href={resume}
                                target="_blank"
                                className={styles.about_resume}
                            >
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
