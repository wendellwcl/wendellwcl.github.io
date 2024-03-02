import { BsFillEyeFill, BsGithub, BsWindow } from "react-icons/bs";

//Styles
import { ReactElement } from "react";
import styles from "./ProjectCard.module.css";

//Props
interface Props {
    img: string;
    name: string;
    technologies: { name: string; icon: ReactElement }[];
    liveUrl: string;
    repositoryUrl: string;
}

const ProjectCard = ({
    name,
    img,
    repositoryUrl,
    liveUrl,
    technologies,
}: Props) => {
    return (
        <article className={styles.card_container}>
            <div className={styles.card_body}>
                <div className={styles.img_container}>
                    <img src={img} alt={`imagem do porjeto ${name}`} />
                    <div className={styles.img_filter}></div>
                </div>
                <div className={styles.card_infos}>
                    <div className={styles.technologies}>
                        {technologies.map((item, index) => (
                            <span title={item.name} key={index}>
                                {item.icon}
                            </span>
                        ))}
                    </div>
                    <h4 className={styles.title}>{name}</h4>
                    <div className={styles.links_container}>
                        <button>
                            <BsFillEyeFill />
                            Visualizar
                        </button>
                        <a href={liveUrl} target="_blank">
                            <BsWindow />
                            Acessar
                        </a>
                        <a href={repositoryUrl} target="_blank">
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
