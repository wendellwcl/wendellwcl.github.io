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
import flixImg from "../../assets/screenshotFlix.png";
import musicImg from "../../assets/screenshotMusic.png";
import pokeImg from "../../assets/screenshotPoke.png";
import taskManagerImg from "../../assets/screenshotTaskManager.png";

//Components
import ProjectCard from "../../components/ProjectCard/ProjectCard";

//Styles
import styles from "./ProjectsSection.module.css";

const ProjectsSection = () => {
    const projects = [
        {
            img: pokeImg,
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
            img: taskManagerImg,
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
            img: flixImg,
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
            img: musicImg,
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
        <section className={styles.projects_section}>
            <div className={styles.projects_container}>
                <h3 className={styles.projects_title}>Projetos</h3>
                <div>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} projectData={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
