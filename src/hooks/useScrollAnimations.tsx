import { useLayoutEffect } from "react";

const useScrollAnimations = () => {
    //Get elements
    useLayoutEffect(() => {
        const elements = document.querySelectorAll(".scroll_animation");
        elements.forEach((el) => observer.observe(el));
    });

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
