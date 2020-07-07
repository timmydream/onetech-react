import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
}
h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    color: #202124;
}`;

export default GlobalStyle;
