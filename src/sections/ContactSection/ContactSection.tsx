//Components
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

//Styles
import styles from "./ContactSection.module.css";

const ContactSection = () => {
    return (
        <section className={styles.contact_section}>
            <span className={styles.section_anchor} id="contact-section"></span>

            <div className={`${styles.contact_container} scroll_animation`}>
                <h3 className={styles.contact_title}>Contato</h3>

                <div className={styles.contact_wrapper}>
                    <div className={styles.text_container}>
                        <div className={styles.text_wrapper}>
                            <p className={styles.text}>
                                <span className={styles.text_highlight}>
                                    Envie sua mensagem agora mesmo!
                                </span>
                                <span className={styles.text_secondary}>
                                    Vamos conversar sobre seus projetos.
                                </span>
                            </p>

                            <ContactList />
                        </div>
                    </div>

                    <div className={styles.form_container}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
