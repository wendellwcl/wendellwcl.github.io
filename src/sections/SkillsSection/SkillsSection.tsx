//Assets
import {
    BiLogoAngular,
    BiLogoCss3,
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoSass,
    BiLogoTypescript,
} from "react-icons/bi";

//Styles
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
    const skills = [
        {
            name: "React",
            element: <BiLogoReact />,
        },
        {
            name: "Angular",
            element: <BiLogoAngular />,
        },
        {
            name: "TypeScript",
            element: <BiLogoTypescript />,
        },
        {
            name: "JavaScript",
            element: <BiLogoJavascript />,
        },
        {
            name: "HTML",
            element: <BiLogoHtml5 />,
        },
        {
            name: "CSS",
            element: <BiLogoCss3 />,
        },
        {
            name: "Sass",
            element: <BiLogoSass />,
        },
        {
            name: "Git",
            element: <BiLogoGit />,
        },
        {
            name: "Github",
            element: <BiLogoGithub />,
        },
    ];

    return (
        <section className={styles.skills_section}>
            <div className={styles.skills_container}>
                <h3 className={styles.skills_title}>Principais Skills</h3>
                <div className={styles.skills} id="skills">
                    <svg
                        style={{
                            width: "0",
                            height: "0",
                            position: "absolute",
                        }}
                        aria-hidden="true"
                        focusable="false"
                    >
                        <linearGradient
                            id="my-cool-gradient"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="1"
                        >
                            <stop offset="0%" stopColor="#6acee3" />
                            <stop offset="33%" stopColor="#845eff" />
                            <stop offset="66%" stopColor="#bc56ff" />
                            <stop offset="100%" stopColor="#d44eff" />
                        </linearGradient>
                    </svg>
                    {skills.map((item) => (
                        <div key={item.name} className={styles.skill_item}>
                            {item.element}
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
