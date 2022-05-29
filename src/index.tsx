import { createRoot } from "react-dom/client";
import App from "./Components/App";
import "./CSS/css_reset.css";
import "./CSS/global.css";

// ===============================================================
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
