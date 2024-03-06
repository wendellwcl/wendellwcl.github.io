import { useEffect } from "react";

function useTheme() {
    //Get theme
    const prefersColorScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    );

    //Change theme
    function changeTheme(e: MediaQueryList) {
        const body = document.body;

        if (e.matches) {
            body.classList.add("dark-mode");
        } else {
            body.classList.remove("dark-mode");
        }
    }

    //Run theme check and change on startup
    useEffect(() => {
        changeTheme(prefersColorScheme);

        prefersColorScheme.addEventListener("change", () =>
            changeTheme(prefersColorScheme)
        );
    }, []);
}

export default useTheme;
