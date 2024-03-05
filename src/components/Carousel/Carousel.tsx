import { ReactElement, useLayoutEffect, useRef } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

//Styles
import styles from "./Carousel.module.css";

interface Props {
    children: ReactElement[];
}

const Carousel = ({ children }: Props) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const { firstImg, lastImg } = getImgsElements();
        firstImg.classList.add("selected");
        sliderRef.current?.prepend(lastImg);
    }, []);

    function getImgsElements() {
        const imgsArr = sliderRef.current?.children;
        const firstImg = imgsArr![0];
        const lastImg = imgsArr![imgsArr!.length - 1];

        return { firstImg, lastImg };
    }

    function handleArrowClick(action: string) {
        const { firstImg, lastImg } = getImgsElements();

        const currentImg = sliderRef.current?.querySelector(".selected");
        currentImg?.classList.remove("selected");

        let targetImg;

        if (action === "prev") {
            targetImg = currentImg?.previousElementSibling;
            sliderRef.current?.prepend(lastImg);
        } else if (action === "next") {
            targetImg = currentImg?.nextElementSibling;
            sliderRef.current?.append(firstImg);
        }

        targetImg?.classList.add("selected");
    }

    return (
        <div className={styles.carousel_container}>
            <button
                className={`${styles.btn_action} prev`}
                onClick={() => handleArrowClick("prev")}
            >
                <BsCaretLeftFill />
            </button>
            <button
                className={`${styles.btn_action} next`}
                onClick={() => handleArrowClick("next")}
            >
                <BsCaretRightFill />
            </button>
            <div className={styles.carousel} ref={sliderRef}>
                {children}
            </div>
        </div>
    );
};

export default Carousel;
