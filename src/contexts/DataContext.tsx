import { ReactElement, createContext } from "react";

//Icons
import {
    BiLogoAngular,
    BiLogoBootstrap,
    BiLogoCss3,
    BiLogoGit,
    BiLogoGithub,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoReact,
    BiLogoSass,
    BiLogoTypescript,
} from "react-icons/bi";
import {
    BsEnvelopeFill,
    BsGithub,
    BsLinkedin,
    BsWhatsapp,
} from "react-icons/bs";

//Assets
import flixImg1 from "../assets/screenshotFlix1.png";
import flixImg2 from "../assets/screenshotFlix2.png";
import flixImg3 from "../assets/screenshotFlix3.png";
import musicImg1 from "../assets/screenshotMusic1.png";
import musicImg2 from "../assets/screenshotMusic2.png";
import musicImg3 from "../assets/screenshotMusic3.png";
import pokeImg1 from "../assets/screenshotPoke1.png";
import pokeImg2 from "../assets/screenshotPoke2.png";
import pokeImg3 from "../assets/screenshotPoke3.png";
import taskManagerImg1 from "../assets/screenshotTaskManager1.png";
import taskManagerImg2 from "../assets/screenshotTaskManager2.png";
import taskManagerImg3 from "../assets/screenshotTaskManager3.png";

interface IDataContextValue {
    skills: { name: string; element: ReactElement }[];
    projects: {
        imgs: string[];
        name: string;
        technologies: { name: string; icon: ReactElement }[];
        liveUrl: string;
        repositoryUrl: string;
    }[];
    contacts: { element: ReactElement; link: string; text: string }[];
}

const DEFAULT_VALUE: IDataContextValue = {
    skills: [
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
    ],
    projects: [
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
    ],
    contacts: [
        {
            element: <BsWhatsapp />,
            link: "https://wa.me/5512988577185",
            text: "(12) 98857-7185",
        },
        {
            element: <BsEnvelopeFill />,
            link: "mailto:wendell.wcl19@gmail.com",
            text: "wendell.wcl19@gmail.com",
        },
        {
            element: <BsLinkedin />,
            link: "https://www.linkedin.com/in/wendellwcl/",
            text: "linkedin.com/in/wendellwcl",
        },
        {
            element: <BsGithub />,
            link: "https://github.com/wendellwcl",
            text: "github.com/wendellwcl",
        },
    ],
};

export const DataContext = createContext<IDataContextValue>(DEFAULT_VALUE);

interface Props {
    children: ReactElement;
}

const DataContextProvider = ({ children }: Props) => {
    const skills = DEFAULT_VALUE.skills;
    const projects = DEFAULT_VALUE.projects;
    const contacts = DEFAULT_VALUE.contacts;

    return (
        <DataContext.Provider value={{ skills, projects, contacts }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;
