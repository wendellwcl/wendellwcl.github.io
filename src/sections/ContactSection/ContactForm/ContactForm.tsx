import { useRef } from "react";

//Components
import CustomInput from "../../../components/CustomInput/CustomInput";

//Styles
import styles from "./ContactForm.module.scss";

const ContactForm = () => {
    const submitBtnRef = useRef<HTMLButtonElement>(null);

    //Display feedback on form submission
    function handleSubmit() {
        submitBtnRef.current!.disabled = true;
        (submitBtnRef.current as HTMLElement).innerText = "Por favor, aguarde...";
    }

    return (
        <form
            className={styles["contact-form"]}
            onSubmit={() => handleSubmit()}
            action="https://formsubmit.co/wendell.wcl19@gmail.com"
            method="POST"
        >
            <CustomInput type="text" name="name" placeholder="Nome" required={true} />

            <CustomInput type="email" name="email" placeholder="E-mail" required={true} />

            <CustomInput type="textarea" name="message" placeholder="Menssagem" required={true} />

            <button type="submit" className={styles["contact-form__btn"]} ref={submitBtnRef}>
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
