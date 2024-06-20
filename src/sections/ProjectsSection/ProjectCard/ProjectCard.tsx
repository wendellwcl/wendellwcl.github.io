import { ReactElement } from "react";

//Icons
import { BsFillEyeFill, BsGithub, BsWindow } from "react-icons/bs";

//Components
import Carousel from "../../../components/Carousel/Carousel";
import Modal from "../../../components/Modal/Modal";

//Utils
import { openModal } from "../../../utils/ModalActions";

//Styles
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
    projectData: {
        imgs: string[];
        name: string;
        technologies: { name: string; icon: ReactElement }[];
        liveUrl: string;
        repositoryUrl: string;
    };
}

const ProjectCard = ({ projectData }: ProjectCardProps) => {
    return (
        <article className={styles["card-container"]}>
            <div className={`${styles["card"]} scroll_animation`}>
                <div className={styles["card__img"]}>
                    <img
                        src={projectData.imgs[0]}
                        alt={`imagem do porjeto ${projectData.name}`}
                        onClick={() => openModal(`modal-${projectData.name}`)}
                    />
                </div>

                <div className={styles["card__infos"]}>
                    <div className={styles["technologies"]}>
                        {projectData.technologies.map((item, index) => (
                            <span className={styles["technologies__item"]} title={item.name} key={index}>
                                {item.icon}
                            </span>
                        ))}
                    </div>

                    <h4 className={styles["title"]}>{projectData.name}</h4>

                    <div className={styles["btn-container"]}>
                        <button onClick={() => openModal(`modal-${projectData.name}`)}>
                            <BsFillEyeFill />
                            Visualizar
                        </button>
                    </div>
                </div>
            </div>

            <Modal id={`modal-${projectData.name}`}>
                <>
                    <Carousel>
                        {projectData.imgs.map((img, index) => (
                            <img key={index} src={img} />
                        ))}
                    </Carousel>

                    <div className={styles["modal-footer"]}>
                        <a className={styles["modal-footer__link"]} href={projectData.liveUrl} target="_blank">
                            <BsWindow />
                            Acessar Projeto
                        </a>

                        <a className={styles["modal-footer__link"]} href={projectData.repositoryUrl} target="_blank">
                            <BsGithub />
                            Visitar Repositório
                        </a>
                    </div>
                </>
            </Modal>
        </article>
    );
};

export default ProjectCard;
