import { useContext } from "react";

//Contexts
import { DataContext } from "../../contexts/DataContext";

//Components
import ProjectCard from "./ProjectCard/ProjectCard";

//Styles
import styles from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
    const { projects } = useContext(DataContext);

    return (
        <section className={styles["projects"]}>
            <span className={styles["projects__anchor"]} id="projects-section"></span>
            <div className={styles["projects__container"]}>
                <h3 className={styles["projects__title"]}>Projetos</h3>

                <div className={styles["projects__content"]}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} projectData={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
