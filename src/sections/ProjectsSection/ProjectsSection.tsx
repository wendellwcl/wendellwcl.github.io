//Icons
import {
    BiLogoAngular,
    BiLogoBootstrap,
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoSass,
    BiLogoTypescript,
} from "react-icons/bi";

//Assets
import flixImg1 from "../../assets/screenshotFlix1.png";
import flixImg2 from "../../assets/screenshotFlix2.png";
import flixImg3 from "../../assets/screenshotFlix3.png";
import musicImg1 from "../../assets/screenshotMusic1.png";
import musicImg2 from "../../assets/screenshotMusic2.png";
import musicImg3 from "../../assets/screenshotMusic3.png";
import pokeImg1 from "../../assets/screenshotPoke1.png";
import pokeImg2 from "../../assets/screenshotPoke2.png";
import pokeImg3 from "../../assets/screenshotPoke3.png";
import taskManagerImg1 from "../../assets/screenshotTaskManager1.png";
import taskManagerImg2 from "../../assets/screenshotTaskManager2.png";
import taskManagerImg3 from "../../assets/screenshotTaskManager3.png";

//Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";

//Styles
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
    const projects = [
        {
            imgs: [pokeImg1, pokeImg2, pokeImg3],
            name: "Poke",
            technologies: [
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
            ],
            liveUrl: "https://wendellwcl.github.io/poke/",
            repositoryUrl: "https://github.com/wendellwcl/poke",
        },
        {
            imgs: [taskManagerImg1, taskManagerImg2, taskManagerImg3],
            name: "TaskManager",
            technologies: [
                {
                    name: "Angular",
                    icon: <BiLogoAngular />,
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
            ],
            liveUrl: "https://wendellwcl.github.io/TaskManager/",
            repositoryUrl: "https://github.com/wendellwcl/TaskManager",
        },
        {
            imgs: [flixImg1, flixImg2, flixImg3],
            name: "Flix",
            technologies: [
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
            ],
            liveUrl: "https://wendellwcl.github.io/flix/",
            repositoryUrl: "https://github.com/wendellwcl/flix",
        },
        {
            imgs: [musicImg1, musicImg2, musicImg3],
            name: "Music",
            technologies: [
                {
                    name: "React",
                    icon: <BiLogoReact />,
                },
                {
                    name: "JavaScript",
                    icon: <BiLogoJavascript />,
                },
                {
                    name: "Bootstrap",
                    icon: <BiLogoBootstrap />,
                },
                {
                    name: "CSS 3",
                    icon: <BiLogoCss3 />,
                },
                {
                    name: "HTML 5",
                    icon: <BiLogoHtml5 />,
                },
            ],
            liveUrl: "https://wendellwcl.github.io/PlayerDeMusica/",
            repositoryUrl: "https://github.com/wendellwcl/PlayerDeMusica",
        },
    ];

    return (
        <section className={styles.projects_section} id="projects-section">
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
