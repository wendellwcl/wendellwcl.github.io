//Assets
import badge2 from "../../assets/badge2.png";

//Styles
import styles from "./AboutSection.module.css";

const AboutSection = () => {
    return (
        <section className={styles.about_section}>
            <div className={styles.about_container}>
                <div className={styles.about_img}>
                    <img
                        src={badge2}
                        alt="imagem de um crachá com a foto do desenvolvedor do site"
                    />
                </div>

                <div className={styles.about_text}>
                    <div className={styles.text_wrapper}>
                        <h3 className={styles.title}>Sobre</h3>

                        <p className={styles.text}>
                            Olá! Meu nome é{" "}
                            <span className={styles.highlight}>Wendell</span>,
                            um apaixonado pela arte de dar vida à web. Tenho
                            sólidos conhecimentos como{" "}
                            <span className={styles.highlight}>
                                desenvolvedor web front-end
                            </span>{" "}
                            e também muita{" "}
                            <span className={styles.highlight}>
                                afinidade com design
                            </span>
                            . Meu objetivo é sempre entregar projetos que não
                            apenas atendam às necessidades do cliente, mas
                            também proporcionem uma{" "}
                            <span className={styles.highlight}>
                                experiência excepcional aos usuários
                            </span>
                            . Se você está procurando um desenvolvedor front-end
                            comprometido, criativo e orientado para resultados,{" "}
                            <span className={styles.highlight}>
                                estou pronto para fazer parte do seu time
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
