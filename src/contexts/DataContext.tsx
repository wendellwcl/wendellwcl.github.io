import { ReactElement, createContext } from "react";

//Icons
import {
    BiLogoAngular,
    BiLogoCss3,
    BiLogoHtml5,
    BiLogoJavascript,
    BiLogoMongodb,
    BiLogoReact,
    BiLogoSass,
    BiLogoTailwindCss,
    BiLogoTypescript,
} from "react-icons/bi";
import { BsEnvelopeFill, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { SiNextdotjs } from "react-icons/si";

//Assets
import pokeImg1 from "../assets/img/screenshots/screenshotPoke1.jpg";
import pokeImg2 from "../assets/img/screenshots/screenshotPoke2.jpg";
import pokeImg3 from "../assets/img/screenshots/screenshotPoke3.jpg";
import pokeBingoImg1 from "../assets/img/screenshots/screenshotPokeBingo1.jpg";
import pokeBingoImg2 from "../assets/img/screenshots/screenshotPokeBingo2.jpg";
import pokeBingoImg3 from "../assets/img/screenshots/screenshotPokeBingo3.jpg";
import taskManagerImg1 from "../assets/img/screenshots/screenshotTaskManager1.jpg";
import taskManagerImg2 from "../assets/img/screenshots/screenshotTaskManager2.jpg";
import taskManagerImg3 from "../assets/img/screenshots/screenshotTaskManager3.jpg";
import weather360Img1 from "../assets/img/screenshots/screenshotWeather3601.png";
import weather360Img2 from "../assets/img/screenshots/screenshotWeather3602.png";
import weather360Img3 from "../assets/img/screenshots/screenshotWeather3603.png";

//Classes
import { Contact } from "../classes/Contact.class";
import { Icon, Project } from "../classes/Project.class";
import { Skill } from "../classes/Skill.class";

interface IDataContextValue {
    skills: Array<Skill>;
    projects: Array<Project>;
    contacts: Array<Contact>;
}

const DEFAULT_VALUE: IDataContextValue = {
    skills: [
        new Skill("ReactJS", <BiLogoReact />),
        new Skill("NextJS", <SiNextdotjs />),
        new Skill("TypeScript", <BiLogoTypescript />),
        new Skill("JavaScript", <BiLogoJavascript />),
        new Skill("Tailwind", <BiLogoTailwindCss />),
        new Skill("Sass", <BiLogoSass />),
        new Skill("CSS", <BiLogoCss3 />),
        new Skill("HTML", <BiLogoHtml5 />),
    ],
    projects: [
        new Project(
            [pokeBingoImg1, pokeBingoImg2, pokeBingoImg3],
            "PokeBingo",
            [
                new Icon("NextJS", <SiNextdotjs />),
                new Icon("MongoDB", <BiLogoMongodb />),
                new Icon("React", <BiLogoReact />),
                new Icon("TypeScript", <BiLogoTypescript />),
                new Icon("Tailwind", <BiLogoTailwindCss />),
                new Icon("Sass", <BiLogoSass />),
                new Icon("JavaScript", <BiLogoJavascript />),
                new Icon("CSS 3", <BiLogoCss3 />),
                new Icon("HTML 5", <BiLogoHtml5 />),
            ],
            "https://poke-bingo.vercel.app",
            "https://github.com/wendellwcl/PokeBingo"
        ),
        new Project(
            [pokeImg1, pokeImg2, pokeImg3],
            "Poke",
            [
                new Icon("React", <BiLogoReact />),
                new Icon("TypeScript", <BiLogoTypescript />),
                new Icon("JavaScript", <BiLogoJavascript />),
                new Icon("Sass", <BiLogoSass />),
                new Icon("CSS 3", <BiLogoCss3 />),
                new Icon("HTML 5", <BiLogoHtml5 />),
            ],
            "https://wendellwcl.github.io/poke/",
            "https://github.com/wendellwcl/poke"
        ),

        new Project(
            [weather360Img1, weather360Img2, weather360Img3],
            "Weather360",
            [
                new Icon("React", <BiLogoReact />),
                new Icon("TypeScript", <BiLogoTypescript />),
                new Icon("JavaScript", <BiLogoJavascript />),
                new Icon("Sass", <BiLogoSass />),
                new Icon("CSS 3", <BiLogoCss3 />),
                new Icon("HTML 5", <BiLogoHtml5 />),
            ],
            "https://wendellwcl.github.io/Weather360/",
            "https://github.com/wendellwcl/Weather360"
        ),
        new Project(
            [taskManagerImg1, taskManagerImg2, taskManagerImg3],
            "TaskManager",
            [
                new Icon("Angular", <BiLogoAngular />),
                new Icon("TypeScript", <BiLogoTypescript />),
                new Icon("JavaScript", <BiLogoJavascript />),
                new Icon("Sass", <BiLogoSass />),
                new Icon("CSS 3", <BiLogoCss3 />),
                new Icon("HTML 5", <BiLogoHtml5 />),
            ],
            "https://wendellwcl.github.io/TaskManager/",
            "https://github.com/wendellwcl/TaskManager"
        ),
    ],
    contacts: [
        new Contact(<BsWhatsapp />, "https://wa.me/5512988577185", "(12) 98857-7185"),
        new Contact(<BsEnvelopeFill />, "mailto:wendell.wcl19@gmail.com", "wendell.wcl19@gmail.com"),
        new Contact(<BsLinkedin />, "https://www.linkedin.com/in/wendellwcl/", "linkedin.com/in/wendellwcl"),
        new Contact(<BsGithub />, "https://github.com/wendellwcl", "github.com/wendellwcl"),
    ],
};

export const DataContext = createContext<IDataContextValue>(DEFAULT_VALUE);

const DataContextProvider = ({ children }: { children: ReactElement }) => {
    const skills = DEFAULT_VALUE.skills;
    const projects = DEFAULT_VALUE.projects;
    const contacts = DEFAULT_VALUE.contacts;

    return <DataContext.Provider value={{ skills, projects, contacts }}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
