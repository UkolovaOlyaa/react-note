import styled from "styled-components";

const StyledButtonOnSticker = styled.button`
    background-color: transparent;
    border: none;
`;

export const ButtonOnSticker = ({ onClick, children}) => {

    return (
        <StyledButtonOnSticker onClick={onClick}>
            {children}
        </StyledButtonOnSticker>
    );
}