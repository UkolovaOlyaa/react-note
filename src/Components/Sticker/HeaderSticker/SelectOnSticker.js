import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateSticker } from "../../Store/actionCreator";

const StyledSelector = styled.select`
    background-color: transparent;
    border: none;
    outline: none;
    color: black;
    margin-right: 80px;
    font-weight: bold;
`;

export const SelectOnSticker = ({id}) => {
    const dispatch = useDispatch();
    const stickers = useSelector((state) => state.sticker)
    const currentSticker = stickers.find(sticker => sticker.id === id); 
   
    const handleColorChange = (event) => {
        const newColor = event.target.value;
        dispatch(updateSticker(id, { color: newColor }));
    }

    return (
        <StyledSelector value={currentSticker.color} onChange={handleColorChange}>
            <option value="violet">Violet</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="gray">Gray</option>
        </StyledSelector>
    );
}
