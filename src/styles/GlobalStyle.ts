import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
}
h1 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: .1px;
    line-height: 1.5;
    color: #202124;
}
p {
    color: red;
    font-size: .8rem;
    font-weight: 500;
    margin: 0;
}`;

export default GlobalStyle;
