import {
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoSass,
    BiLogoTypescript,
} from "react-icons/bi";

//Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";

//Styles
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
    return (
        <section className={styles.projects_section}>
            <div className={styles.projects_container}>
                <h3 className={styles.projects_title}>Projetos</h3>
                <div>
                    <ProjectCard
                        img="https://picsum.photos/1600/900"
                        name="Name do Projeto"
                        technologies={[
                            {
                                name: "React",
                                icon: <BiLogoReact />,
                            },
                            {
                                name: "TypeScript",
                                icon: <BiLogoTypescript />,
                            },
                            {
                                name: "JavaScript",
                                icon: <BiLogoJavascript />,
                            },
                            {
                                name: "Sass",
                                icon: <BiLogoSass />,
                            },
                            {
                                name: "CSS 3",
                                icon: <BiLogoCss3 />,
                            },
                            {
                                name: "HTML 5",
                                icon: <BiLogoHtml5 />,
                            },
                        ]}
                        liveUrl="#"
                        repositoryUrl="#"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
