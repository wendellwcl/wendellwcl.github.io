import { ReactElement } from "react";
import { BsFillEyeFill, BsGithub, BsWindow } from "react-icons/bs";

//Styles
import styles from "./ProjectCard.module.css";

//Props
interface Props {
    projectData: {
        img: string;
        name: string;
        technologies: { name: string; icon: ReactElement }[];
        liveUrl: string;
        repositoryUrl: string;
    };
}

const ProjectCard = ({ projectData }: Props) => {
    return (
        <article className={styles.card_container}>
            <div className={styles.card_body}>
                <div className={styles.img_container}>
                    <img
                        src={projectData.img}
                        alt={`imagem do porjeto ${projectData.name}`}
                    />
                </div>
                <div className={styles.card_infos}>
                    <div className={styles.technologies}>
                        {projectData.technologies.map((item, index) => (
                            <span title={item.name} key={index}>
                                {item.icon}
                            </span>
                        ))}
                    </div>
                    <h4 className={styles.title}>{projectData.name}</h4>
                    <div className={styles.links_container}>
                        <button>
                            <BsFillEyeFill />
                            Visualizar
                        </button>
                        <a href={projectData.liveUrl} target="_blank">
                            <BsWindow />
                            Acessar
                        </a>
                        <a href={projectData.repositoryUrl} target="_blank">
                            <BsGithub />
                            Repositório
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
