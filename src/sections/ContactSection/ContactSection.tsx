//Components
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

//Styles
import styles from "./ContactSection.module.scss";

const ContactSection = () => {
    return (
        <section className={styles["contact-section"]}>
            <span className={styles["contact-section__anchor"]} id="contact-section"></span>

            <div className={`${styles["contact"]} scroll_animation`}>
                <h3 className={styles["contact__title"]}>Contato</h3>

                <div className={styles["contact__wrapper"]}>
                    <div className={styles["text-container"]}>
                        <div className={styles["text-wrapper"]}>
                            <p className={styles["text"]}>
                                <span className={styles["text--emphasis"]}>Envie sua mensagem agora mesmo!</span>
                                <span className={styles["text--secondary"]}>Vamos conversar sobre seus projetos.</span>
                            </p>

                            <ContactList />
                        </div>
                    </div>

                    <div className={styles["form-container"]}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
