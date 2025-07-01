import styled from "styled-components";

export const Button = styled.button`
    background-color: var(--container-background);
    border: 1px solid black;
    border-radius: 5px;
    vertical-align: center;
    line-height: 1em;
    text-decoration: none;

    &:hover {
        background-color: rgba(0, 0, 0, 0.55);
    }

    &:active {
        background-color: rgb(73, 73, 73);
    }
    
    &:disabled {
        opacity: 0.4;
        pointer-events:none;
    }

    svg {
        margin-bottom: -2px;
    }
`