import { useContext } from "react";

//Contexts
import { DataContext } from "../../contexts/DataContext";

//Styles
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
    const { skills } = useContext(DataContext);

    return (
        <section className={styles.skills_section}>
            <span className={styles.section_anchor} id="skills-section"></span>
            <div className={styles.skills_container}>
                <h3 className={styles.skills_title}>Principais Skills</h3>

                <div className={styles.skills_wrapper} id="skills">
                    <div className={`${styles.skills} scroll_animation`}>
                        {skills.map((item) => (
                            <div key={item.name} className={styles.skill_item}>
                                {item.element}
                                <span className={styles.skill_name}>
                                    {item.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
