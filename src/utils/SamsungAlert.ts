/**
 * Displays an alert informing that the website may be displayed incorrectly, in dark mode, if the access browser is Samsung Internet.
 * @param {} - none.
 * @returns {} - none.
 */

function SamsungAlert() {
    if (navigator.userAgent.match(/SamsungBrowser/i)) {
        alert(
            "Seu navegador (Samsung Internet) pode não exibir este site corretamente em modo escuro (DarkMode). Por favor, considere utilizar outro navegador ou não utilize o modo escuro (DarkMode)."
        );
    }

    return;
}

export default SamsungAlert;
