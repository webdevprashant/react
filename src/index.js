import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";

import App from "./App";
import Clock from "./Clock";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        <Clock />
    </React.StrictMode>
);
    
reportWebVitals();