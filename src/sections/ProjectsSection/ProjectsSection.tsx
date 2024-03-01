//Styles
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
    return (
        <section className={styles.projects_section}>
            <div className={styles.projects_container}>
                <h3 className={styles.projects_title}>Projetos</h3>
            </div>
        </section>
    );
};

export default ProjectsSection;
