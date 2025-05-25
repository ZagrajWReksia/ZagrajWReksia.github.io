import styled from "styled-components";

export const Box = styled.div`
    background-color: var(--container-background);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
`;

export const Alert = styled(Box)`
    --container-background: rgba(221, 40, 40, 0.2);
`