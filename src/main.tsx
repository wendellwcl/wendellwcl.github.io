import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/styles.css";

//Contexts
import DataContextProvider from "./contexts/DataContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <DataContextProvider>
            <App />
        </DataContextProvider>
    </React.StrictMode>
);
