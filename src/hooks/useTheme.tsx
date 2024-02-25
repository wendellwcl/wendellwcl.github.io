import { useEffect } from "react";

function useTheme() {
    const prefersColorScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    function changeTheme(e: MediaQueryList) {
        const body = document.body;

        if (e.matches) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }

    useEffect(() => {
        changeTheme(prefersColorScheme);

        prefersColorScheme.addEventListener("change", () =>
            changeTheme(prefersColorScheme)
        );
    }, []);
}

export default useTheme;
