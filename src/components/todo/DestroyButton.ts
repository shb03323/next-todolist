import styled from "@emotion/styled";

export const DestroyButton = styled.button`
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    font-size: 30px;
    color: #cc9a9a;
    margin: auto 0 11px;
    transition: color 0.2s ease-out;
    cursor: pointer;

    &:hover {
        color: #af5b5e;
    }

    &:after {
        content: '×';
    }
`;
