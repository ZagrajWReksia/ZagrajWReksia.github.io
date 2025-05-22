import styled from "styled-components";

const FancyHeadingText = styled.span<{ text: string, size: string }>`
    position: relative;
    font-family: "BowlbyOneSC", serif;
    line-height: 1em;
    color: #fee34d;
    font-weight: bold;
    font-size: ${props => props.size == 'big' ? '2.5em' : props.size == 'medium' ? '1.5em' : '0.5em'};
    -webkit-text-stroke: .12rem #e91a1d;
    z-index: 10;

    // &:before {
    //     content: "${props => props.text || ''}";
    //     position: absolute;
    //     z-index: -1;
    //     -webkit-text-stroke: 0.6rem #000;
    // }
`;

export const FancyHeading = ({ text, size = 'big' }: { text: string, size?: 'big' | 'medium' | 'small' }) => (
    <FancyHeadingText text={text} size={size}>{text}</FancyHeadingText>
);

export const SubTitle = styled.div`
    margin-bottom: 20px;
    font-size: 1.3em;
    font-family: "BowlbyOneSC", serif;
    -webkit-text-stroke: 0.08rem #000;
`;