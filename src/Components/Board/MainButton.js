import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addSticker } from "../Store/actionCreator";

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

export const MainButton = ({ isAllowed, children }) => {
    const dispatch = useDispatch();

    const addStickerHandler = () => {
        if (isAllowed) {
            dispatch(addSticker());
        }
    };

    return (
        <StyledMainButton
            onClick={addStickerHandler}
            className={isAllowed ? '' : 'disabled'}
        >
            {children}
        </StyledMainButton>
    );
};
