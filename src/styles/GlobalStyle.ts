import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
    }
    .anticon {
        color: rgba(0, 0, 0, 0.6) !important; 
    }
    .cart-but {
        z-index: 1;
        width: 60px;
        height: 60px;
        box-shadow: 0 6px 10px 0 #666;
        transition: all 0.1s ease-in-out;
        position: fixed;
        left: 50px;
        bottom: 50px;

        .cart-icon {
            font-size: 30px;
            text-align: center;
        }
    }
    .cart-but:hover {
        box-shadow: 0 6px 14px 0 #666;
        transform: scale(1.05);
        border: none;
    }
    .custom-drawer {
        display: flex; 
        align-items: space-between; 
        flex-direction: column;
        justify-content: center;
    }
    p {
        text-align: center;
        font-size: 1rem;
    }
    h4 {
        text-align: center;
        font-weight: 500;
        font-size: 1.1rem;
    }
`;

export default GlobalStyle;
