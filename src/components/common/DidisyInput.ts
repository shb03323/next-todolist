import styled from "@emotion/styled";

export const DidisyInput = styled.input`
    position: relative;
    margin: 0;
    width: 100%;
    font-size: 24px;
    font-family: inherit;
    font-weight: inherit;
    line-height: 1.4em;
    color: inherit;
    box-sizing: border-box;
    padding: 16px 16px 16px 60px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::-webkit-input-placeholder {
        font-style: italic;
        font-weight: 300;
        color: #e6e6e6;
    }
`;
