import { ReactElement, useLayoutEffect, useRef } from "react";

//Icons
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";

//Styles
import styles from "./Carousel.module.scss";

const Carousel = ({ children }: { children: ReactElement[] }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    //Preparing carousel and adding necessary classes
    useLayoutEffect(() => {
        const { firstImg, lastImg } = getImgsElements();
        firstImg.classList.add("selected");
        carouselRef.current?.prepend(lastImg);
    }, []);

    //Get the first and last img elements
    function getImgsElements() {
        const imgsArr = carouselRef.current?.children;
        const firstImg = imgsArr![0];
        const lastImg = imgsArr![imgsArr!.length - 1];

        return { firstImg, lastImg };
    }

    //Perform carousel actions
    function handleArrowClick(action: string) {
        const { firstImg, lastImg } = getImgsElements();

        const currentImg = carouselRef.current?.querySelector(".selected");
        currentImg?.classList.remove("selected");

        let targetImg;

        if (action === "prev") {
            targetImg = currentImg?.previousElementSibling;
            carouselRef.current?.prepend(lastImg);
        } else if (action === "next") {
            targetImg = currentImg?.nextElementSibling;
            carouselRef.current?.append(firstImg);
        }

        targetImg?.classList.add("selected");
    }

    return (
        <div className={styles["carousel"]}>
            <button className={`${styles["carousel__action-btn"]} prev`} onClick={() => handleArrowClick("prev")}>
                <BsCaretLeftFill />
            </button>

            <button className={`${styles["carousel__action-btn"]} next`} onClick={() => handleArrowClick("next")}>
                <BsCaretRightFill />
            </button>

            <div className={styles["carousel__content"]} ref={carouselRef}>
                {children}
            </div>
        </div>
    );
};

export default Carousel;
