import { useLayoutEffect, useRef } from "react";

//Components
import CustomInput from "../../../components/CustomInput/CustomInput";

//Styles
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    const submitBtnRef = useRef<HTMLButtonElement>(null);

    //Logic for controlling input field animations
    useLayoutEffect(() => {
        document.querySelectorAll(".input_field").forEach((element) => {
            element.addEventListener("blur", (event) => {
                const target = event.target as HTMLInputElement;

                if (target.value != "") {
                    target.nextElementSibling?.classList.add("filled");
                } else {
                    target.nextElementSibling?.classList.remove("filled");
                }
            });
        });
    }, []);

    //Display feedback on form submission
    function handleSubmit() {
        submitBtnRef.current!.disabled = true;
        (submitBtnRef.current as HTMLElement).innerText =
            "Por favor, aguarde...";
    }

    return (
        <form
            className={styles.contact_form}
            onSubmit={() => handleSubmit()}
            action="https://formsubmit.co/wendell.wcl19@gmail.com"
            method="POST"
        >
            <CustomInput
                type="text"
                name="nome"
                placeholder="Nome"
                required={true}
            />

            <CustomInput
                type="email"
                name="email"
                placeholder="E-mail"
                required={true}
            />

            <CustomInput
                type="textarea"
                name="message"
                placeholder="Menssagem"
                required={true}
            />

            <button
                type="submit"
                className={styles.form_btn}
                ref={submitBtnRef}
            >
                Enviar
            </button>
        </form>
    );
};

export default ContactForm;
