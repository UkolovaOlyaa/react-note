import styled from "styled-components";

const StyledMainButton = styled.button`
    background-color: #b062c8; 
    border-radius: 5px;
    border: none;
    color: black;
    cursor: pointer;
    padding: 0.5rem 1rem;
    position: absolute;
    font-weight: bold;
    top: 1rem;
    left: 1rem;

    &.disabled {
        background-color: grey; 
        cursor: not-allowed; 
    }

    &:hover:not(.disabled) {
        background-color: #7f4491; 
    }
`;

const StyledButtonOnSticker = styled.button`
    background-color: transparent;
    border: none;
`;

export const UniversalButton = ({isAllowed, onClick, mainButton, children}) => {

    const handleClick = () => {
        if (isAllowed) {
            onClick(); 
        }
    }
    return mainButton ? (
        <StyledMainButton onClick={handleClick} className={!isAllowed ? 'disabled' : ''}>
            {children}
        </StyledMainButton>
    ) : (
        <StyledButtonOnSticker onClick={onClick}>
            {children}
        </StyledButtonOnSticker>
    );
}