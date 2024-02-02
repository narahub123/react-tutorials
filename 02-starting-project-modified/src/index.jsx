import React from "react"; // need this when using it without jsx
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
// ReactDOM.createRoot(entryPoint).render(<App />);  // with JSX
ReactDOM.createRoot(entryPoint).render(React.createElement(App)); // without JSX
