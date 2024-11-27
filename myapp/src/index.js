import {createRoot} from "react-dom/client";
import App from "./App";
let div = document.querySelector("#root");

//inside render App component is called just like a tag with diamond braces<>
createRoot(div).render(<App></App>);