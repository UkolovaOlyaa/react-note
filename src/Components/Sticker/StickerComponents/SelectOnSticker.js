import styled from "styled-components"

const StyledSelector = styled.select`
    background-color: transparent;
    border: none;
    outline: none;
    color: black;
    margin-right: 80px;
    font-weight: bold;
`;
export const SelectOnSticker = ({value, onChange}) => {
    return(
        <StyledSelector value={value} onChange={onChange}>
            <option value="violet">Violet</option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
            <option value="gray">Gray</option>
        </StyledSelector>
    )
}