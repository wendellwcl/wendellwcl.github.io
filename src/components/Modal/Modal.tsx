import { ReactElement } from "react";

//Icons
import { BsXLg } from "react-icons/bs";

//Utils
import { closeModal } from "../../utils/ModalActions";

//Styles
import styles from "./Modal.module.scss";

interface ModalProps {
    id: string;
    children: ReactElement;
}

const Modal = ({ id, children }: ModalProps) => {
    return (
        <div className={styles["modal_container"]} id={id}>
            <div className={styles["modal_container__fade"]} onClick={() => closeModal(id)}></div>

            <div className={styles["modal"]}>
                <button className={styles["modal__btn-close"]} onClick={() => closeModal(id)}>
                    <BsXLg />
                </button>

                <div className={styles["modal__content"]}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
