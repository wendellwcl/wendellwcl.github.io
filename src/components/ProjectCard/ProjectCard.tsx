import { ReactElement } from "react";

//Icons
import { BsFillEyeFill, BsGithub, BsWindow } from "react-icons/bs";

//Custom Hooks
import useModal from "../../hooks/useModal";

//Components
import Carousel from "../Carousel/Carousel";
import Modal from "../Modal/Modal";

//Styles
import styles from "./ProjectCard.module.css";

interface Props {
    projectData: {
        imgs: string[];
        name: string;
        technologies: { name: string; icon: ReactElement }[];
        liveUrl: string;
        repositoryUrl: string;
    };
}

const ProjectCard = ({ projectData }: Props) => {
    const { openModal } = useModal();

    return (
        <article className={styles.card_container}>
            <div className={styles.card_body}>
                <div className={styles.img_container}>
                    <img
                        src={projectData.imgs[0]}
                        alt={`imagem do porjeto ${projectData.name}`}
                        onClick={() => openModal(`modal-${projectData.name}`)}
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

                    <div className={styles.btn_container}>
                        <button
                            onClick={() =>
                                openModal(`modal-${projectData.name}`)
                            }
                        >
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

                    <div className={styles.modal_links}>
                        <a href={projectData.liveUrl} target="_blank">
                            <BsWindow />
                            Acessar Projeto
                        </a>

                        <a href={projectData.repositoryUrl} target="_blank">
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
