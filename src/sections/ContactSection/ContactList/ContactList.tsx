import { useContext } from "react";

//Contexts
import { DataContext } from "../../../contexts/DataContext";

//Styles
import styles from "./ContactList.module.scss";

const ContactList = () => {
    const { contacts } = useContext(DataContext);

    return (
        <ul className={styles["contact"]}>
            {contacts.map((item) => (
                <li className={styles["contact__item"]} key={item.text}>
                    <a href={item.link} target="_blank" className={styles["contact__item__link"]}>
                        {item.element}
                        {item.text}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
