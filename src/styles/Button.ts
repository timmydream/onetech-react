import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    background: none;
    border: 2px solid #000;
    line-height: 1;
    margin: 0.5em;
    padding: 1em 2em;
    color: var(--color);
    transition: 0.25s;

    &:hover {
        border-color: var(--hover);
        color: #fff;
        box-shadow: inset 0 -3.25em 0 0 var(--hover);
    }  

    --color: #000;
    --hover: #000;
`;