import { useLayoutEffect, useRef } from "react";

//Styles
import styles from "./CustomInput.module.scss";

interface CustomInputProps {
    type?: string;
    name: string;
    placeholder: string;
    required: boolean;
}

const CustomInput = ({ type = "text", name, placeholder, required }: CustomInputProps) => {
    const inputRef = useRef<HTMLDivElement | null>(null);

    //Logic for controlling input field animations
    useLayoutEffect(() => {
        inputRef.current?.querySelector(".input_field")?.addEventListener("blur", (event) => {
            const target = event.target as HTMLInputElement;

            if (target.value != "") {
                target.nextElementSibling?.classList.add("filled");
            } else {
                target.nextElementSibling?.classList.remove("filled");
            }
        });
    }, []);

    return (
        <div className={styles["input-container"]} ref={inputRef}>
            {type !== "textarea" && (
                <input
                    type={type}
                    name={name}
                    id={name}
                    className={`${styles["input-field"]} input_field`}
                    placeholder={placeholder}
                    required={required}
                />
            )}

            {type === "textarea" && (
                <textarea
                    name={name}
                    id={name}
                    className={`${styles["input-field"]} input_field`}
                    placeholder={placeholder}
                    required={required}
                />
            )}

            <label htmlFor={name} className={styles["label"]}>
                {placeholder}
            </label>
        </div>
    );
};

export default CustomInput;
