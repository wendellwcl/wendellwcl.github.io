import { useContext } from "react";

//Contexts
import { DataContext } from "../../../contexts/DataContext";

//Styles
import styles from "./ContactList.module.css";

const ContactList = () => {
    const { contacts } = useContext(DataContext);

    return (
        <ul className={styles.contact_list}>
            {contacts.map((item) => (
                <li className={styles.contact_item} key={item.text}>
                    <a
                        href={item.link}
                        target="_blank"
                        className={styles.contact_link}
                    >
                        {item.element}
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
