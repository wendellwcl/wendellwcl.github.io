import {
    BsEnvelopeFill,
    BsGithub,
    BsLinkedin,
    BsWhatsapp,
} from "react-icons/bs";

//Assets
import phone from "../../assets/phone.png";

//Styles
import styles from "./ContactSection.module.css";

const ContactSection = () => {
    const contacts = [
        {
            element: <BsWhatsapp />,
            link: "https://wa.me/5512988577185",
            text: "(12) 98857-7185",
        },
        {
            element: <BsEnvelopeFill />,
            link: "mailto:wendell.wcl19@gmail.com",
            text: "wendell.wcl19@gmail.com",
        },
        {
            element: <BsLinkedin />,
            link: "https://www.linkedin.com/in/wendellwcl/",
            text: "linkedin.com/in/wendellwcl",
        },
        {
            element: <BsGithub />,
            link: "https://github.com/wendellwcl",
            text: "github.com/wendellwcl",
        },
    ];

    return (
        <section className={styles.contact_section}>
            <div className={styles.contact_container}>
                <h3 className={styles.contact_title}>Contato</h3>
                <div className={styles.contact_body}>
                    <div className={styles.contact_text}>
                        <div className={styles.text_group}>
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
                                            {item.element}
                                            <a href={item.link} target="_blank">
                                                {item.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contact_img}>
                        <img src={phone} alt="imagem de um telefone" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
