import styled from "styled-components";

export const Box = styled.div`
    background-color: var(--container-background);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
`;

export type AlertProps = {
    color?: string;
}

export const Alert = styled(Box)`
    --container-background: ${({color}) => color ?? "rgba(221, 40, 40, 0.2)"};
`

export const HighlightBox = styled.div<{size?: string}>`
    padding: 4px;
    padding-left: 5px;
    font-size: ${({size}) => size ? size : '0.8em'};
    border-radius: 0;
    border: 1px solid rgba(196, 196, 196, 0.16);
    border-left: 8px solid rgba(196, 196, 196, 0.16);
    background: rgba(204, 204, 204, 0.05);
    display: inline-block;
`