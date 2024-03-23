import { useEffect } from "react";

const useAlertSamsung = () => {
    useEffect(() => {
        //Display alert
        function checkAndAlert() {
            if (navigator.userAgent.match(/SamsungBrowser/i)) {
                alert(
                    "Seu navegador (Samsung Internet) pode não exibir este site corretamente em modo escuro (DarkMode). Por favor, considere utilizar outro navegador ou não utilize o modo escuro (DarkMode)."
                );
            }
        }

        checkAndAlert();
    }, []);
};

export default useAlertSamsung;
