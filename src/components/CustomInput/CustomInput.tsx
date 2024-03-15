//Styles
import styles from "./CustomInput.module.css";

interface Props {
    type: string;
    name: string;
    placeholder: string;
    required: boolean;
}

const CustomInput = ({ type, name, placeholder, required }: Props) => {
    return (
        <div className={styles.input_container}>
            {type !== "textarea" && (
                <input
                    type={type}
                    name={name}
                    id={name}
                    className={`${styles.input_field} input_field`}
                    placeholder={placeholder}
                    required={required}
                />
            )}

            {type === "textarea" && (
                <textarea
                    name={name}
                    id={name}
                    className={`${styles.input_field} input_field`}
                    placeholder={placeholder}
                    required={required}
                />
            )}

            <label htmlFor={name} className={styles.label}>
                {placeholder}
            </label>
        </div>
    );
};

export default CustomInput;
