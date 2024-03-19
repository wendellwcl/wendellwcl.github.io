import { useEffect, useLayoutEffect, useState } from "react";

const useScrollAnimations = () => {
    const [elementsArr, setElementsArr] = useState<NodeListOf<Element> | null>(
        null
    );

    //Get and set elements
    useLayoutEffect(() => {
        const elements = document.querySelectorAll(".scroll_animation");
        setElementsArr(elements);
    }, []);

    //Executing animation control logic
    useEffect(() => {
        handleObserver();

        window.addEventListener("resize", () => {
            handleObserver();
        });
    }, [elementsArr]);

    //Enable and disable animation
    const handleObserver = () => {
        if (window.innerWidth > 768) {
            elementsArr?.forEach((el) => observer.observe(el));
        } else {
            elementsArr?.forEach((el) => observer.unobserve(el));
        }
    };

    //Logic that executes the animation
    const observer = new IntersectionObserver((entries) =>
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        })
    );
};

export default useScrollAnimations;
