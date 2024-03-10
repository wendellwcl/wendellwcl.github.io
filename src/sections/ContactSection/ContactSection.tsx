import { useContext, useLayoutEffect, useRef } from "react";

//Contexts
import { DataContext } from "../../contexts/DataContext";

//Styles
import styles from "./ContactSection.module.css";

const ContactSection = () => {
    const { contacts } = useContext(DataContext);

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
        <section className={styles.contact_section} id="contact-section">
            <div className={styles.contact_container}>
                <h3 className={styles.contact_title}>Contato</h3>

                <div className={styles.contact_grid}>
                    <div className={styles.contact_text}>
                        <div className={styles.text_wrapper}>
                            <p className={styles.text_highlight}>
                                Envie sua mensagem agora mesmo!
                            </p>
                            <p className={styles.text}>
                                Vamos conversar sobre seus projetos.
                            </p>

                            <div className={styles.contact_options}>
                                <ul>
                                    {contacts.map((item) => (
                                        <li key={item.text}>
                                            <a href={item.link} target="_blank">
                                                {item.element}
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.form_container}>
                        <form
                            onSubmit={() => handleSubmit()}
                            action="https://formsubmit.co/wendell.wcl19@gmail.com"
                            method="POST"
                        >
                            <div className={styles.input_container}>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    className={`${styles.input_field} input_field`}
                                    placeholder="Nome"
                                    required
                                />
                                <label htmlFor="name" className={styles.label}>
                                    Nome
                                </label>
                            </div>

                            <div className={styles.input_container}>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className={`${styles.input_field} input_field`}
                                    placeholder="E-mail"
                                    required
                                />
                                <label htmlFor="email" className={styles.label}>
                                    E-mail
                                </label>
                            </div>

                            <div className={styles.input_container}>
                                <textarea
                                    name="message"
                                    id="message"
                                    className={`${styles.input_field} input_field`}
                                    placeholder="Menssagem"
                                    required
                                ></textarea>
                                <label
                                    htmlFor="message"
                                    className={styles.label}
                                >
                                    Mensagem
                                </label>
                            </div>

                            <button
                                type="submit"
                                className={styles.form_btn}
                                ref={submitBtnRef}
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
