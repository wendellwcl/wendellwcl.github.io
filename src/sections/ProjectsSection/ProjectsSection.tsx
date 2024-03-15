import { useContext } from "react";

//Contexts
import { DataContext } from "../../contexts/DataContext";

//Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";

//Styles
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
    const { projects } = useContext(DataContext);

    return (
        <section className={styles.projects_section}>
            <span
                className={styles.section_anchor}
                id="projects-section"
            ></span>
            <div className={styles.projects_container}>
                <h3 className={styles.projects_title}>Projetos</h3>

                <div className={styles.projects_wrapper}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} projectData={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
