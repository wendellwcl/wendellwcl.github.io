import { useContext } from "react";

//Contexts
import { DataContext } from "../../contexts/DataContext";

//Styles
import styles from "./SkillsSection.module.scss";

const SkillsSection = () => {
    const { skills } = useContext(DataContext);

    return (
        <section className={styles["skills-section"]}>
            <span className={styles["skills-section__anchor"]} id="skills-section"></span>
            <div className={styles["skills-container"]}>
                <h3 className={styles["skills-container__title"]}>Principais Skills</h3>

                <div className={styles["skills-wrapper"]} id="skills">
                    <div className={`${styles["skills"]} scroll_animation`}>
                        {skills.map((item) => (
                            <div key={item.name} className={styles["skills__item"]}>
                                {item.element}
                                <span className={styles["skills__item__name"]}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
