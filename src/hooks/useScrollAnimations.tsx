import { useLayoutEffect } from "react";

const useScrollAnimations = () => {
    const observer = new IntersectionObserver((entries) =>
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        })
    );

    useLayoutEffect(() => {
        const elements = document.querySelectorAll(".scroll_animation");
        console.log(elements);
        elements.forEach((el) => observer.observe(el));
    });
};

export default useScrollAnimations;
