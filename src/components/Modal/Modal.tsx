import { ReactElement } from "react";
import { BsXLg } from "react-icons/bs";

//Hooks
import useModal from "../../hooks/useModal";

//Styles
import styles from "./Modal.module.css";

interface Props {
    id: string;
    children: ReactElement;
}

const Modal = ({ id, children }: Props) => {
    const { closeModal } = useModal();

    return (
        <div className={styles.modal_wrapper} id={id}>
            <div
                className={styles.modal_fade}
                onClick={() => closeModal(id)}
            ></div>
            <div className={styles.modal_container}>
                <button
                    className={styles.btn_close}
                    onClick={() => closeModal(id)}
                >
                    <BsXLg />
                </button>
                <div className={styles.modal_content}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
